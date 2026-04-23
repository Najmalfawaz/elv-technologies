const { PrismaClient } = require('@prisma/client');
const { UTApi } = require('uploadthing/server');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const utapi = new UTApi();

async function run() {
  console.log('--- Migrating All Restored Clients to Production ---');
  const clientDir = path.join(process.cwd(), 'public/images/partners&clients/clients');
  const files = fs.readdirSync(clientDir);
  
  console.log(`Found ${files.length} files in clients directory.`);

  let count = 0;
  for (const file of files) {
    const filePath = path.join(clientDir, file);
    try {
      const uploadRes = await utapi.uploadFiles(new File([fs.readFileSync(filePath)], file, { type: 'image/jpeg' }));
      if (uploadRes.data) {
        await prisma.client.create({
          data: {
            name: `Client ${++count}`,
            logo: uploadRes.data.url,
            priority: count
          }
        });
        process.stdout.write('.');
      }
    } catch (e) {
      console.error(`\nFailed to upload ${file}:`, e.message);
    }
  }
  console.log('\n--- Client Migration Complete ---');
  process.exit(0);
}

run();
