const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Migrating Case Studies Legacy Solution Data to HTML...');
    const caseStudies = await prisma.caseStudy.findMany();

    for (const study of caseStudies) {
        if (!study.solution) continue;

        const solution = study.solution;

        // If it already has HTML and no components, we skip
        if (solution.html && !solution.components && !solution.points) {
            continue;
        }

        let html = '';

        // Convert components to list items
        if (solution.components && solution.components.length > 0) {
            html += `<ul>`;
            solution.components.forEach(c => {
                html += `<li><strong>${c.name}</strong><br/>${c.details}</li>`;
            });
            html += `</ul>`;
        }

        // Convert points to list items
        if (solution.points && solution.points.length > 0) {
            if (!html.includes('<ul>')) html += `<ul>`;
            solution.points.forEach(p => {
                html += `<li>${p}</li>`;
            });
            if (!html.includes('</ul>')) html += `</ul>`;
        }

        // if there are no components or points, it's just raw text, we wrap it in a p tag if needed
        if (!html && solution.text) {
            html = `<p>${solution.text}</p>`;
        }

        const newSolution = {
            title: solution.title || 'Engineered and Implemented Solution',
            html: html || solution.html || ''
        };

        await prisma.caseStudy.update({
            where: { id: study.id },
            data: {
                solution: newSolution
            }
        });

        console.log(`Migrated Case Study: ${study.slug}`);
    }

    console.log('✅ Successfully migrated all case studies to use Rich Text HTML mapping!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });
