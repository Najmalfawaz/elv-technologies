import { caseStudiesList } from './case-studies-list';

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  date: string;
}

export const caseStudies: CaseStudy[] = caseStudiesList;
