const { PrismaClient } = require('@prisma/client');
const { UTApi } = require('uploadthing/server');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const utapi = new UTApi();

const clients = [
  { src: "/images/partners&clients/clients/image001.png", alt: "Client 1" },
  { src: "/images/partners&clients/clients/image002.png", alt: "Client 2" },
  { src: "/images/partners&clients/clients/image003.png", alt: "Client 3" },
  { src: "/images/partners&clients/clients/image004.png", alt: "Client 4" },
  { src: "/images/partners&clients/clients/image005.png", alt: "Client 5" },
  { src: "/images/partners&clients/clients/image006.png", alt: "Client 6" },
  { src: "/images/partners&clients/clients/image007.png", alt: "Client 7" },
  { src: "/images/partners&clients/clients/image008.png", alt: "Client 8" },
  { src: "/images/partners&clients/clients/image009.png", alt: "Client 9" },
  { src: "/images/partners&clients/clients/image010.png", alt: "Client 10" },
  { src: "/images/partners&clients/clients/image011.png", alt: "Client 11" },
  { src: "/images/partners&clients/clients/image012.png", alt: "Client 12" },
  { src: "/images/partners&clients/clients/image013.png", alt: "Client 13" },
  { src: "/images/partners&clients/clients/image014.png", alt: "Client 14" },
  { src: "/images/partners&clients/clients/image015.png", alt: "Client 15" },
  { src: "/images/partners&clients/clients/image016.png", alt: "Client 16" },
  { src: "/images/partners&clients/clients/image017.png", alt: "Client 17" },
  { src: "/images/partners&clients/clients/image018.png", alt: "Client 18" },
  { src: "/images/partners&clients/clients/image019.png", alt: "Client 19" },
  { src: "/images/partners&clients/clients/image020.png", alt: "Client 20" },
  { src: "/images/partners&clients/clients/image021.png", alt: "Client 21" },
  { src: "/images/partners&clients/clients/image022.png", alt: "Client 22" },
  { src: "/images/partners&clients/clients/image023.png", alt: "Client 23" },
  { src: "/images/partners&clients/clients/image024.png", alt: "Client 24" },
  { src: "/images/partners&clients/clients/image025.png", alt: "Client 25" },
  { src: "/images/partners&clients/clients/image026.png", alt: "Client 26" },
  { src: "/images/partners&clients/clients/image027.png", alt: "Client 27" },
  { src: "/images/partners&clients/clients/image028.png", alt: "Client 28" },
  { src: "/images/partners&clients/clients/image029.png", alt: "Client 29" },
  { src: "/images/partners&clients/clients/image030.png", alt: "Client 30" },
  { src: "/images/partners&clients/clients/image031.png", alt: "Client 31" },
  { src: "/images/partners&clients/clients/image032.png", alt: "Client 32" },
  { src: "/images/partners&clients/clients/image033.png", alt: "Client 33" },
  { src: "/images/partners&clients/clients/image034.png", alt: "Client 34" },
  { src: "/images/partners&clients/clients/image035.png", alt: "Client 35" },
  { src: "/images/partners&clients/clients/image036.png", alt: "Client 36" },
  { src: "/images/partners&clients/clients/image037.png", alt: "Client 37" },
  { src: "/images/partners&clients/clients/image038.png", alt: "Client 38" },
];

async function run() {
  console.log('--- Migrating Clients to Production ---');
  for (const logo of clients) {
    const filePath = path.join(process.cwd(), 'public', logo.src);
    if (fs.existsSync(filePath)) {
      try {
        const uploadRes = await utapi.uploadFiles(new File([fs.readFileSync(filePath)], path.basename(filePath), { type: 'image/png' }));
        if (uploadRes.data) {
          await prisma.client.create({
            data: {
              name: logo.alt,
              logo: uploadRes.data.url,
            }
          });
          process.stdout.write('.');
        }
      } catch (e) {
        console.error('\nFailed to upload:', logo.src, e.message);
      }
    } else {
      console.log('\nFile not found:', filePath);
    }
  }
  console.log('\n--- Client Migration Complete ---');
  process.exit(0);
}

run();
