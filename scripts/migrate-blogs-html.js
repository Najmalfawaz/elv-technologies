const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function migrate() {
    console.log('Fetching blogs...');
    const blogs = await prisma.blog.findMany();

    console.log(`Found ${blogs.length} blogs to check...`);

    for (const blog of blogs) {
        try {
            // Check if this is the old JSON format
            const parsed = JSON.parse(blog.content);

            if (parsed && Array.isArray(parsed.sections)) {
                console.log(`Migrating blog ${blog.slug} from JSON to HTML...`);

                let htmlContent = '';
                for (const section of parsed.sections) {
                    if (section.type === 'paragraph') {
                        htmlContent += `<p>${section.content}</p>`;
                    } else if (section.type === 'heading') {
                        htmlContent += `<h2>${section.title}</h2>`;
                    } else if (section.type === 'list') {
                        htmlContent += `<h3>${section.title || ''}</h3><ul>`;
                        for (const item of section.items) {
                            htmlContent += `<li>${item}</li>`;
                        }
                        htmlContent += `</ul>`;
                    } else if (section.type === 'image') {
                        htmlContent += `<img src="${section.src}" alt="${section.alt}" />`;
                    }
                }

                await prisma.blog.update({
                    where: { id: blog.id },
                    data: { content: htmlContent }
                });
                console.log(`Success! Migrated ${blog.slug}`);
            } else {
                console.log(`Blog ${blog.slug} is already flat HTML or not array format, skipping...`);
            }
        } catch (e) {
            // If it can't be parsed, it's either an HTML string natively from Quill or invalid. Skip.
            console.log(`Blog ${blog.slug} is already HTML string, skipping...`);
        }
    }

    console.log('Migration complete!');
    await prisma.$disconnect();
}

migrate();
