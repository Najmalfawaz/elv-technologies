const { PrismaClient } = require('@prisma/client');

async function sync() {
  console.log('--- Syncing Case Study Data: Local -> Production ---');

  // Local Client
  const localPrisma = new PrismaClient({
    datasources: {
      db: { url: "postgresql://postgres:admin@localhost:5432/elv_db?schema=public" }
    }
  });

  // Production Client
  const prodPrisma = new PrismaClient({
    datasources: {
      db: { url: "postgres://550962c5f2a73ac446bab87d7bbed23a9a37803e99e350aa42cca889c3e4c5a9:sk_Vfn0oPk6kfxChAhqkbwKo@db.prisma.io:5432/postgres?sslmode=require" }
    }
  });

  try {
    const localCaseStudies = await localPrisma.caseStudy.findMany();
    console.log(`Found ${localCaseStudies.length} case studies locally.`);

    for (const localCS of localCaseStudies) {
      const prodCS = await prodPrisma.caseStudy.findFirst({
        where: { slug: localCS.slug }
      });

      if (prodCS) {
        await prodPrisma.caseStudy.update({
          where: { id: prodCS.id },
          data: {
            image: localCS.image,
            gallery: localCS.gallery
          }
        });
        console.log(`Updated Production: ${localCS.slug}`);
      } else {
        console.log(`Skipped (not in prod): ${localCS.slug}`);
      }
    }
    console.log('--- Sync Complete ---');
  } catch (error) {
    console.error('Sync failed:', error);
  } finally {
    await localPrisma.$disconnect();
    await prodPrisma.$disconnect();
    process.exit(0);
  }
}

sync();
