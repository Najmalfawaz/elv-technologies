import { prisma } from "@/lib/prisma";
import { blogPosts } from "@/lib/blog-data";
import { caseStudiesData } from "@/lib/case-studies-data";

export const getDb = async () => {
    return prisma;
};

export const getCollection = async (collection: string) => {
    switch (collection) {
        case "blogs":
            return blogPosts;
        case "case-studies":
            return caseStudiesData;
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
