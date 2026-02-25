import { prisma } from "@/lib/prisma";

export const getDb = async () => {
    return prisma;
};

export const getCollection = async (collection: string) => {
    switch (collection) {
        case "blogs":
            return prisma.blog.findMany();
        case "case-studies":
            return prisma.caseStudy.findMany();
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
