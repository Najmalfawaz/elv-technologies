import { PrismaClient } from '@prisma/client';

async function migrate() {
  const OLD_URL = "postgres://550962c5f2a73ac446bab87d7bbed23a9a37803e99e350aa42cca889c3e4c5a9:sk_Vfn0oPk6kfxChAhqkbwKo@db.prisma.io:5432/postgres?sslmode=require";
  const NEW_URL = "postgres://5853e1fad22c386bb741b5599c952dfca793beba74fdd1d6b836abcc8757291b:sk_b6NtGqChR-FGvxsOEEdF_@db.prisma.io:5432/postgres?sslmode=require";

  console.log('🚀 Starting Data Migration...');

  const oldPrisma = new PrismaClient({
    datasources: { db: { url: OLD_URL } },
  });

  const newPrisma = new PrismaClient({
    datasources: { db: { url: NEW_URL } },
  });

  try {
    // 1. Migrate Blogs
    console.log('📦 Migrating Blogs...');
    const blogs = await oldPrisma.blog.findMany();
    if (blogs.length > 0) {
      await newPrisma.blog.deleteMany(); // Clear existing
      await newPrisma.blog.createMany({ data: blogs });
    }

    // 2. Migrate Case Studies
    console.log('📦 Migrating Case Studies...');
    const cases = await oldPrisma.caseStudy.findMany();
    if (cases.length > 0) {
      await newPrisma.caseStudy.deleteMany();
      await newPrisma.caseStudy.createMany({ data: cases as any });
    }

    // 3. Migrate Partners
    console.log('📦 Migrating Partners...');
    const partners = await oldPrisma.partner.findMany();
    if (partners.length > 0) {
      await newPrisma.partner.deleteMany();
      await newPrisma.partner.createMany({ data: partners });
    }

    // 4. Migrate Clients
    console.log('📦 Migrating Clients...');
    const clients = await oldPrisma.client.findMany();
    if (clients.length > 0) {
      await newPrisma.client.deleteMany();
      await newPrisma.client.createMany({ data: clients });
    }

    // 5. Migrate FAQs
    console.log('📦 Migrating FAQs...');
    const faqs = await oldPrisma.fAQ.findMany();
    if (faqs.length > 0) {
      await newPrisma.fAQ.deleteMany();
      await newPrisma.fAQ.createMany({ data: faqs });
    }

    // 6. Migrate Careers
    console.log('📦 Migrating Careers...');
    const careers = await oldPrisma.career.findMany();
    if (careers.length > 0) {
      await newPrisma.career.deleteMany();
      await newPrisma.career.createMany({ data: careers });
    }

    // 7. Migrate Testimonials
    console.log('📦 Migrating Testimonials...');
    const testimonials = await oldPrisma.testimonial.findMany();
    if (testimonials.length > 0) {
      await newPrisma.testimonial.deleteMany();
      await newPrisma.testimonial.createMany({ data: testimonials });
    }

    console.log('✅ Migration Finished Successfully!');
  } catch (error) {
    console.error('❌ Migration Failed:', error);
  } finally {
    await oldPrisma.$disconnect();
    await newPrisma.$disconnect();
  }
}

migrate();
