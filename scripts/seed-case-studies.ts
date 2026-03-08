const { PrismaClient } = require('@prisma/client');
const { caseStudiesData } = require('../lib/case-studies-data.ts'); // if we use ts-node, or map it manually

// Since we are running via node, it might be easier to just copy the data here or read the file.
// Let's copy it to avoid ts-node compilation issues in pure node script, or use a small ts script.
const prisma = new PrismaClient();

// Let's use a small TS file so we can run `npx ts-node` to avoid compiling issues.
