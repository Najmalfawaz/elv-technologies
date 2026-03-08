import { PrismaClient } from '@prisma/client';
import { caseStudiesData } from '../lib/case-studies-data';

const prisma = new PrismaClient();

async function compare() {
    const dbStudies = await prisma.caseStudy.findMany();
    console.log(`Static entries: ${caseStudiesData.length}, DB entries: ${dbStudies.length}`);

    let allMatch = true;

    for (const staticStudy of caseStudiesData) {
        const dbStudy = dbStudies.find(db => db.slug === staticStudy.slug);
        if (!dbStudy) {
            console.log(`Missing in DB: ${staticStudy.slug}`);
            allMatch = false;
            continue;
        }

        const keysToMatch = ['client', 'project', 'location', 'overview', 'image'];
        for (const key of keysToMatch) {
            const staticVal = (staticStudy as any)[key];
            const dbVal = (dbStudy as any)[key];
            if (staticVal !== dbVal) {
                console.log(`Mismatch on ${staticStudy.slug} field ${key}: Static='${staticVal}' vs DB='${dbVal}'`);
                allMatch = false;
            }
        }

        if (JSON.stringify(staticStudy.challenges || []) !== JSON.stringify(dbStudy.challenges)) {
            console.log(`Mismatch on ${staticStudy.slug} field challenges`);
            allMatch = false;
        }

        if (JSON.stringify(staticStudy.outcomes || []) !== JSON.stringify(dbStudy.outcomes)) {
            console.log(`Mismatch on ${staticStudy.slug} field outcomes`);
            allMatch = false;
        }

        if (JSON.stringify(staticStudy.gallery || []) !== JSON.stringify(dbStudy.gallery)) {
            console.log(`Mismatch on ${staticStudy.slug} field gallery`);
            allMatch = false;
        }

        if (JSON.stringify(staticStudy.solution) !== JSON.stringify(dbStudy.solution)) {
            console.log(`Mismatch on ${staticStudy.slug} field solution`);
            allMatch = false;
        }
    }

    if (allMatch) {
        console.log('\n✅ SUCCESS: All static case study data PERFECTLY matches the database records!');
    } else {
        console.log('\n❌ ERROR: Some records did not match perfectly.');
    }
}

compare().finally(() => process.exit(0));
