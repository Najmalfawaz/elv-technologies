import { prisma } from "@/lib/prisma";
// import { blogPosts } from "@/lib/blog-data";

export const getDb = async () => {
    return prisma;
};

export const getCollection = async (collection: string) => {
    switch (collection) {
        case "blogs":
            return prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
        case "case-studies":
            return prisma.caseStudy.findMany({
                orderBy: [
                    { isFeatured: 'desc' },
                    { priority: 'asc' },
                    { createdAt: 'desc' }
                ]
            });
        case "careers":
            return prisma.career.findMany();
        case "testimonials":
            return prisma.testimonial.findMany();
        case "faqs":
            return prisma.fAQ.findMany();
        case "partners":
            return prisma.partner.findMany();
        case "clients":
            return prisma.client.findMany();
        default:
            return [];
    }
};
