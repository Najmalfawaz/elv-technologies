'use client';

import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import { toast } from 'sonner';
import { ImageUpload } from '@/components/admin/image-upload';

export default function TestimonialsAdminPage() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState<any>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        company: '',
        content: '',
        rating: 5,
        image: ''
    });

    useEffect(() => { fetchContent(); }, []);

    useEffect(() => {
        if (editing) {
            setFormData({
                name: editing.name,
                role: editing.role || '',
                company: editing.company || '',
                content: editing.content,
                rating: editing.rating,
                image: editing.image || ''
            });
        } else {
            setFormData({
                name: '',
                role: '',
                company: '',
                content: '',
                rating: 5,
                image: ''
            });
        }
    }, [editing, isDialogOpen]);

    async function fetchContent() {
        try {
            const res = await fetch('/api/admin/content');
            const data = await res.json();
            setTestimonials(data.testimonials || []);
        } catch (error) { toast.error('Failed to load testimonials'); }
        finally { setLoading(false); }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editing
                ? `/api/admin/testimonials/${editing.id}`
                : '/api/admin/testimonials';

            const method = editing ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                const saved = await res.json();
                if (editing) {
                    setTestimonials(testimonials.map(t => t.id === editing.id ? saved : t));
                    toast.success('Testimonial updated');
                } else {
                    setTestimonials([saved, ...testimonials]);
                    toast.success('Testimonial added');
                }
                setIsDialogOpen(false);
                setEditing(null);
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) { toast.error('Error saving'); }
    };

    async function deleteItem(id: string) {
        if (!confirm('Delete this testimonial?')) return;
        try {
            const res = await fetch(`/api/admin/testimonials/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setTestimonials(testimonials.filter(t => t.id !== id));
                toast.success('Testimonial deleted');
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error) { toast.error('Error'); }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Testimonials</h2>
                    <p className="text-slate-500">Manage client reviews and feedback.</p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) setEditing(null);
                }}>
                    <DialogTrigger asChild><Button className="bg-red-600 hover:bg-red-700"><Plus className="mr-2 h-4 w-4" /> Add Review</Button></DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader><DialogTitle>{editing ? 'Edit Review' : 'Add Review'}</DialogTitle></DialogHeader>
                        <form onSubmit={handleSave} className="space-y-4 py-4">
                            <div className="flex gap-4">
                                <div className="w-1/3">
                                    <Label>Client Image</Label>
                                    <div className="mt-2">
                                        <ImageUpload
                                            value={formData.image}
                                            onChange={(url) => setFormData({ ...formData, image: url })}
                                            onRemove={() => setFormData({ ...formData, image: '' })}
                                            endpoint="imageUploader"
                                        />
                                    </div>
                                </div>
                                <div className="w-2/3 space-y-4">
                                    <div className="space-y-2">
                                        <Label>Client Name</Label>
                                        <Input
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Role</Label>
                                            <Input
                                                value={formData.role}
                                                onChange={e => setFormData({ ...formData, role: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Company</Label>
                                            <Input
                                                value={formData.company}
                                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Rating (1-5)</Label>
                                        <Input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={formData.rating}
                                            onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Review Content</Label>
                                <Textarea
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    rows={4}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">Save Testimonial</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Card>
                <CardContent className="pt-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Author</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Content</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow><TableCell colSpan={5} className="text-center">Loading...</TableCell></TableRow>
                            ) : testimonials.length === 0 ? (
                                <TableRow><TableCell colSpan={5} className="text-center">No testimonials found.</TableCell></TableRow>
                            ) : (
                                testimonials.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell className="font-medium">
                                            <div>{t.name}</div>
                                            <div className="text-xs text-slate-500">{t.role}</div>
                                        </TableCell>
                                        <TableCell>{t.company}</TableCell>
                                        <TableCell><div className="flex items-center gap-1">{t.rating} <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /></div></TableCell>
                                        <TableCell className="max-w-md truncate">{t.content}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button variant="outline" size="icon" onClick={() => { setEditing(t); setIsDialogOpen(true); }}>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="icon" className="text-red-500 hover:bg-red-50" onClick={() => deleteItem(t.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
