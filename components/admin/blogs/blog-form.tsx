'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Save, X, Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '@/components/admin/image-upload';
import { SuccessDialog } from '@/components/admin/success-dialog';

interface BlogFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export function BlogForm({ initialData, isEditing }: BlogFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialData || {
        title: '',
        slug: '',
        excerpt: '',
        author: 'ELV Technology Solutions',
        category: '',
        image: '',
        content: {
            sections: []
        }
    });

    // Handle content parsing if it comes as string from DB
    if (isEditing && typeof formData.content === 'string') {
        try {
            formData.content = JSON.parse(formData.content);
        } catch (e) {
            formData.content = { sections: [] };
        }
    }

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.excerpt || !formData.category || !formData.image) {
            toast.error('Please fill in all required fields and upload an image');
            return;
        }

        setLoading(true);

        try {
            const url = isEditing
                ? `/api/admin/blogs/${initialData.id}`
                : '/api/admin/blogs';

            const method = isEditing ? 'PATCH' : 'POST';

            const payload = {
                ...formData,
                content: JSON.stringify(formData.content),
                // map excerpt from description if needed, logic handled in state init
            };

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setShowSuccessDialog(true);
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            toast.error('Error saving blog');
        } finally {
            setLoading(false);
        }
    };

    const handleSuccessAction = () => {
        setShowSuccessDialog(false);
        router.push('/admin/blogs');
        router.refresh();
    };

    const addSection = (type: 'paragraph' | 'heading' | 'list') => {
        const newSection = {
            type,
            content: type === 'paragraph' ? '' : undefined,
            title: type === 'heading' || type === 'list' ? '' : undefined,
            items: type === 'list' ? [''] : undefined
        };
        setFormData({
            ...formData,
            content: {
                ...formData.content,
                sections: [...formData.content.sections, newSection]
            }
        });
    };

    const removeSection = (index: number) => {
        const sections = [...formData.content.sections];
        sections.splice(index, 1);
        setFormData({
            ...formData,
            content: { ...formData.content, sections }
        });
    };

    return (
        <>
            <SuccessDialog
                open={showSuccessDialog}
                onOpenChange={setShowSuccessDialog}
                title={isEditing ? "Blog Updated" : "Blog Created"}
                description={isEditing
                    ? "Your blog post has been successfully updated."
                    : "Your new blog post has been successfully created and added to the list."}
                actionLabel="Back to Blogs"
                onAction={handleSuccessAction}
            />
            <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{isEditing ? 'Edit Blog' : 'Create New Blog'}</h2>
                    <div className="space-x-2">
                        <Button variant="outline" type="button" onClick={() => router.back()}>
                            <X className="mr-2 h-4 w-4" /> Cancel
                        </Button>
                        <Button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700">
                            <Save className="mr-2 h-4 w-4" /> {loading ? 'Saving...' : 'Save Blog'}
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">General Info</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug (URL friendly)</Label>
                                <Input
                                    id="slug"
                                    value={formData.slug}
                                    onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                    required
                                    disabled={isEditing}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Hero Image</Label>
                                <ImageUpload
                                    value={formData.image}
                                    onChange={(url) => setFormData({ ...formData, image: url })}
                                    onRemove={() => setFormData({ ...formData, image: '' })}
                                    endpoint="imageUploader"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Metadata</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="excerpt">Short Excerpt</Label>
                                <Textarea
                                    id="excerpt"
                                    value={formData.excerpt}
                                    onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="author">Author</Label>
                                <Input
                                    id="author"
                                    value={formData.author}
                                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Blog Content Sections</CardTitle>
                        <div className="flex gap-2">
                            <Button type="button" variant="outline" size="sm" onClick={() => addSection('paragraph')}>
                                + Paragraph
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => addSection('heading')}>
                                + Heading
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => addSection('list')}>
                                + List
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {formData.content.sections.map((section: any, index: number) => (
                            <div key={index} className="relative p-4 border rounded-lg bg-slate-50/50">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2 text-red-500"
                                    onClick={() => removeSection(index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>

                                <div className="space-y-4">
                                    <div className="text-xs font-bold text-slate-400 uppercase">{section.type}</div>

                                    {(section.type === 'heading' || section.type === 'list') && (
                                        <div className="space-y-2">
                                            <Label>Title</Label>
                                            <Input
                                                value={section.title}
                                                onChange={e => {
                                                    const sections = [...formData.content.sections];
                                                    sections[index].title = e.target.value;
                                                    setFormData({ ...formData, content: { ...formData.content, sections } });
                                                }}
                                            />
                                        </div>
                                    )}

                                    {section.type === 'paragraph' && (
                                        <div className="space-y-2">
                                            <Label>Content</Label>
                                            <Textarea
                                                value={section.content}
                                                onChange={e => {
                                                    const sections = [...formData.content.sections];
                                                    sections[index].content = e.target.value;
                                                    setFormData({ ...formData, content: { ...formData.content, sections } });
                                                }}
                                                rows={4}
                                            />
                                        </div>
                                    )}

                                    {section.type === 'list' && (
                                        <div className="space-y-2">
                                            <Label>List Items</Label>
                                            {section.items.map((item: string, i: number) => (
                                                <div key={i} className="flex gap-2 mb-2">
                                                    <Input
                                                        value={item}
                                                        onChange={e => {
                                                            const sections = [...formData.content.sections];
                                                            sections[index].items[i] = e.target.value;
                                                            setFormData({ ...formData, content: { ...formData.content, sections } });
                                                        }}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => {
                                                            const sections = [...formData.content.sections];
                                                            sections[index].items.splice(i, 1);
                                                            setFormData({ ...formData, content: { ...formData.content, sections } });
                                                        }}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    const sections = [...formData.content.sections];
                                                    sections[index].items.push('');
                                                    setFormData({ ...formData, content: { ...formData.content, sections } });
                                                }}
                                            >
                                                <Plus className="h-4 w-4 mr-1" /> Add Item
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {formData.content.sections.length === 0 && (
                            <div className="text-center py-12 border-2 border-dashed rounded-lg text-slate-400">
                                No sections added yet. Use the buttons above to build your post.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </form>
        </>
    );
}
