'use client';

import { useEffect, useState, use } from 'react';
import { CaseStudyForm } from '@/components/admin/case-studies/case-study-form';
import { toast } from 'sonner';

export default function EditCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [caseStudy, setCaseStudy] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCaseStudy() {
            try {
                const res = await fetch('/api/admin/content');
                const data = await res.json();
                const found = data.caseStudies?.find((c: any) => c.slug === resolvedParams.slug);
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
