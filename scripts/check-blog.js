const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const blog = await prisma.blog.findFirst();
    console.log(blog.content);
}

main().catch(console.error).finally(() => prisma.$disconnect());
