const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('Testing Database Connection...');
    try {
        const caseStudies = await prisma.caseStudy.findMany({
            orderBy: { createdAt: 'desc' }
        });
        console.log('Successfully fetched case studies:', caseStudies);
    } catch (error) {
        console.error('Error fetching case studies:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
