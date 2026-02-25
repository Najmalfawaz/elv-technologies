'use client';

import { useEffect, useState, use } from 'react';
import { CaseStudyForm } from '@/components/admin/case-studies/case-study-form';
import { toast } from 'sonner';
import { caseStudiesData } from '@/lib/case-studies-data';

export default function EditCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [caseStudy, setCaseStudy] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCaseStudy() {
            try {
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 500));

                const found = caseStudiesData.find((c: any) => c.slug === resolvedParams.slug);
                if (found) {
                    setCaseStudy(found);
                } else {
                    toast.error('Case study not found');
                }
            } catch (error) {
                toast.error('Failed to load project');
            } finally {
                setLoading(false);
            }
        }
        fetchCaseStudy();
    }, [resolvedParams.slug]);

    if (loading) return <div>Loading...</div>;
    if (!caseStudy) return <div>Project not found</div>;

    return (
        <div className="space-y-6">
            <CaseStudyForm initialData={caseStudy} isEditing />
        </div>
    );
}
