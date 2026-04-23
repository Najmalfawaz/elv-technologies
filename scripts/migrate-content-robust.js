const { PrismaClient } = require('@prisma/client');
const { UTApi } = require('uploadthing/server');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const utapi = new UTApi();

function findFileRecursive(dir, filename) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      const found = findFileRecursive(fullPath, filename);
      if (found) return found;
    } else if (file.toLowerCase() === filename.toLowerCase()) {
      return fullPath;
    }
  }
  return null;
}

// Special case for paths like "case -4" vs "case-4"
function findFileFuzzy(baseDir, dbPath) {
  const parts = dbPath.split('/');
  const filename = parts.pop();
  // Try exact path first
  const exactPath = path.join(process.cwd(), 'public', dbPath);
  if (fs.existsSync(exactPath)) return exactPath;

  // Try recursive search
  return findFileRecursive(baseDir, filename);
}

async function migrate() {
  console.log('--- Robust Content Migration ---');

  // Blogs
  const blogs = await prisma.blog.findMany();
  for (const blog of blogs) {
    if (blog.image && blog.image.startsWith('/images/')) {
      const filePath = findFileFuzzy(path.join(process.cwd(), 'public/images/blogs'), blog.image);
      if (filePath) {
        try {
          const res = await utapi.uploadFiles(new File([fs.readFileSync(filePath)], path.basename(filePath), { type: 'image/jpeg' }));
          if (res.data) {
            await prisma.blog.update({ where: { id: blog.id }, data: { image: res.data.url } });
            console.log(`Migrated Blog: ${blog.title}`);
          }
        } catch (e) { console.error(`Error blog:`, e.message); }
      } else { console.log(`Not found blog image: ${blog.image}`); }
    }
  }

  // Case Studies
  const caseStudies = await prisma.caseStudy.findMany();
  for (const cs of caseStudies) {
    let updateData = {};
    const csDir = path.join(process.cwd(), 'public/images/case-studies');

    // Main image
    if (cs.image && cs.image.startsWith('/images/')) {
      const filePath = findFileFuzzy(csDir, cs.image);
      if (filePath) {
        try {
          const res = await utapi.uploadFiles(new File([fs.readFileSync(filePath)], path.basename(filePath), { type: 'image/jpeg' }));
          if (res.data) updateData.image = res.data.url;
        } catch (e) { console.error(`Error CS main:`, e.message); }
      }
    }

    // Gallery
    if (cs.gallery && cs.gallery.length > 0) {
      const newGallery = [];
      for (const img of cs.gallery) {
        if (img.startsWith('/images/')) {
          const filePath = findFileFuzzy(csDir, img);
          if (filePath) {
            try {
              const res = await utapi.uploadFiles(new File([fs.readFileSync(filePath)], path.basename(filePath), { type: 'image/jpeg' }));
              if (res.data) newGallery.push(res.data.url);
              else newGallery.push(img);
            } catch (e) { newGallery.push(img); }
          } else { newGallery.push(img); }
        } else { newGallery.push(img); }
      }
      updateData.gallery = newGallery;
    }

    if (Object.keys(updateData).length > 0) {
      await prisma.caseStudy.update({ where: { id: cs.id }, data: updateData });
      console.log(`Migrated Case Study: ${cs.slug}`);
    }
  }

  console.log('--- Migration Complete ---');
  process.exit(0);
}

migrate();
