'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Save, X, Plus, Trash2, List } from 'lucide-react';
import { ImageUpload } from '@/components/admin/image-upload';
import { SuccessDialog } from '@/components/admin/success-dialog';

interface CaseStudyFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function CaseStudyForm({ initialData, isEditing }: CaseStudyFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialData || {
        slug: '',
        client: '',
        project: '',
        location: '',
        overview: '',
        challenges: [],
        solution: {
            title: 'Engineered and Implemented Solution',
            components: []
        },
        outcomes: [],
        image: '',
        gallery: []
    });

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.client || !formData.project || !formData.overview || !formData.image) {
            toast.error('Please fill in all required fields and upload a featured image');
            return;
        }

        setLoading(true);

        try {
            const url = isEditing
                ? `/api/admin/case-studies/${initialData.id}`
                : '/api/admin/case-studies';

            const method = isEditing ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setShowSuccessDialog(true);
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            toast.error('Error saving case study');
        } finally {
            setLoading(false);
        }
    };

    const handleSuccessAction = () => {
        setShowSuccessDialog(false);
        router.push('/admin/case-studies');
        router.refresh();
    };

    const addItem = (field: 'challenges' | 'outcomes' | 'gallery') => {
        setFormData({
            ...formData,
            [field]: [...formData[field], '']
        });
    };

    const removeItem = (field: 'challenges' | 'outcomes' | 'gallery', index: number) => {
        const items = [...formData[field]];
        items.splice(index, 1);
        setFormData({ ...formData, [field]: items });
    };

    const addComponent = () => {
        setFormData({
            ...formData,
            solution: {
                ...formData.solution,
                components: [...formData.solution.components, { name: '', details: '' }]
            }
        });
    };

    return (
        <>
            <SuccessDialog
                open={showSuccessDialog}
                onOpenChange={setShowSuccessDialog}
                title={isEditing ? "Case Study Updated" : "Case Study Created"}
                description={isEditing
                    ? "The case study has been successfully updated."
                    : "The new case study has been successfully created and added to the portfolio."}
                actionLabel="Back to Case Studies"
                onAction={handleSuccessAction}
            />
            <form onSubmit={handleSave} className="space-y-8 max-w-5xl">
                <div className="flex items-center justify-between sticky top-0 bg-slate-50/90 py-4 z-10">
                    <h2 className="text-2xl font-bold">{isEditing ? 'Edit Case Study' : 'New Case Study'}</h2>
                    <div className="space-x-2">
                        <Button variant="outline" type="button" onClick={() => router.back()}>
                            <X className="mr-2 h-4 w-4" /> Cancel
                        </Button>
                        <Button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700">
                            <Save className="mr-2 h-4 w-4" /> {loading ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader><CardTitle className="text-lg">Project Details</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="client">Client Name</Label>
                                <Input id="client" value={formData.client} onChange={e => setFormData({ ...formData, client: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="project">Project Title</Label>
                                <Input id="project" value={formData.project} onChange={e => setFormData({ ...formData, project: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug</Label>
                                <Input id="slug" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} required disabled={isEditing} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle className="text-lg">Images</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Featured Image</Label>
                                <ImageUpload
                                    value={formData.image}
                                    onChange={(url) => setFormData({ ...formData, image: url })}
                                    onRemove={() => setFormData({ ...formData, image: '' })}
                                    endpoint="imageUploader"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center mb-2">
                                    <Label>Gallery Images</Label>
                                    <Button type="button" variant="outline" size="sm" onClick={() => addItem('gallery')}>+ Add Image</Button>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {formData.gallery.map((path: string, i: number) => (
                                        <div key={i} className="relative">
                                            <ImageUpload
                                                value={path}
                                                onChange={(url) => {
                                                    const gallery = [...formData.gallery];
                                                    gallery[i] = url;
                                                    setFormData({ ...formData, gallery });
                                                }}
                                                onRemove={() => removeItem('gallery', i)}
                                                endpoint="galleryUploader"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader><CardTitle>Project Overview</CardTitle></CardHeader>
                    <CardContent>
                        <Textarea value={formData.overview} onChange={e => setFormData({ ...formData, overview: e.target.value })} rows={4} required />
                    </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg">Challenges</CardTitle>
                            <Button type="button" variant="outline" size="sm" onClick={() => addItem('challenges')}>+ Add</Button>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {formData.challenges.map((c: string, i: number) => (
                                <div key={i} className="flex gap-2">
                                    <Input value={c} onChange={e => {
                                        const challenges = [...formData.challenges];
                                        challenges[i] = e.target.value;
                                        setFormData({ ...formData, challenges });
                                    }} />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => removeItem('challenges', i)}><Trash2 className="h-4 w-4" /></Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg">Outcomes</CardTitle>
                            <Button type="button" variant="outline" size="sm" onClick={() => addItem('outcomes')}>+ Add</Button>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {formData.outcomes.map((o: string, i: number) => (
                                <div key={i} className="flex gap-2">
                                    <Input value={o} onChange={e => {
                                        const outcomes = [...formData.outcomes];
                                        outcomes[i] = e.target.value;
                                        setFormData({ ...formData, outcomes });
                                    }} />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => removeItem('outcomes', i)}><Trash2 className="h-4 w-4" /></Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Solution Components</CardTitle>
                        <Button type="button" variant="outline" size="sm" onClick={addComponent}>+ Add Component</Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {formData.solution.components.map((comp: any, i: number) => (
                            <div key={i} className="p-4 border rounded-lg space-y-3 relative">
                                <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 text-red-500" onClick={() => {
                                    const components = [...formData.solution.components];
                                    components.splice(i, 1);
                                    setFormData({ ...formData, solution: { ...formData.solution, components } });
                                }}><Trash2 className="h-4 w-4" /></Button>
                                <div className="space-y-2">
                                    <Label>Component Name (e.g., CCTV System)</Label>
                                    <Input value={comp.name} onChange={e => {
                                        const components = [...formData.solution.components];
                                        components[i].name = e.target.value;
                                        setFormData({ ...formData, solution: { ...formData.solution, components } });
                                    }} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Details</Label>
                                    <Textarea value={comp.details} onChange={e => {
                                        const components = [...formData.solution.components];
                                        components[i].details = e.target.value;
                                        setFormData({ ...formData, solution: { ...formData.solution, components } });
                                    }} />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </form>
        </>
    );
}
