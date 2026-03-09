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
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Pencil, Trash2, Building, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { ImageUpload } from '@/components/admin/image-upload';

export default function PartnersClientsPage() {
    const [partners, setPartners] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Dialog states
    const [isPartnerOpen, setIsPartnerOpen] = useState(false);
    const [isClientOpen, setIsClientOpen] = useState(false);
    const [editingPartner, setEditingPartner] = useState<any>(null);
    const [editingClient, setEditingClient] = useState<any>(null);

    // Form states
    const [partnerForm, setPartnerForm] = useState({ name: '', logo: '', website: '', category: '' });
    const [clientForm, setClientForm] = useState({ name: '', logo: '', category: '' });

    useEffect(() => { fetchData(); }, []);

    useEffect(() => {
        if (editingPartner) {
            setPartnerForm({
                name: editingPartner.name,
                logo: editingPartner.logo,
                website: editingPartner.website || '',
                category: editingPartner.category || ''
            });
        } else {
            setPartnerForm({ name: '', logo: '', website: '', category: '' });
        }
    }, [editingPartner, isPartnerOpen]);

    useEffect(() => {
        if (editingClient) {
            setClientForm({
                name: editingClient.name,
                logo: editingClient.logo,
                category: editingClient.category || ''
            });
        } else {
            setClientForm({ name: '', logo: '', category: '' });
        }
    }, [editingClient, isClientOpen]);

    async function fetchData() {
        try {
            const [partnersRes, clientsRes] = await Promise.all([
                fetch('/api/admin/partners'),
                fetch('/api/admin/clients')
            ]);
            const partnersData = await partnersRes.json();
            const clientsData = await clientsRes.json();
            setPartners(Array.isArray(partnersData) ? partnersData : []);
            setClients(Array.isArray(clientsData) ? clientsData : []);
        } catch (error) { toast.error('Failed to load data'); }
        finally { setLoading(false); }
    }

    const handlePartnerSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingPartner
                ? `/api/admin/partners/${editingPartner.id}`
                : '/api/admin/partners';
            const method = editingPartner ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(partnerForm)
            });

            if (res.ok) {
                const saved = await res.json();
                if (editingPartner) {
                    setPartners(partners.map(p => p.id === editingPartner.id ? saved : p));
                    toast.success('Partner updated');
                } else {
                    setPartners([saved, ...partners]);
                    toast.success('Partner added');
                }
                setIsPartnerOpen(false);
                setEditingPartner(null);
            } else { throw new Error('Failed to save'); }
        } catch (error) { toast.error('Error saving partner'); }
    };

    const handleClientSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingClient
                ? `/api/admin/clients/${editingClient.id}`
                : '/api/admin/clients';
            const method = editingClient ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clientForm)
            });

            if (res.ok) {
                const saved = await res.json();
                if (editingClient) {
                    setClients(clients.map(c => c.id === editingClient.id ? saved : c));
                    toast.success('Client updated');
                } else {
                    setClients([saved, ...clients]);
                    toast.success('Client added');
                }
                setIsClientOpen(false);
                setEditingClient(null);
            } else { throw new Error('Failed to save'); }
        } catch (error) { toast.error('Error saving client'); }
    };

    async function deletePartner(id: string) {
        if (!confirm('Delete this partner?')) return;
        try {
            const res = await fetch(`/api/admin/partners/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setPartners(partners.filter(p => p.id !== id));
                toast.success('Partner deleted');
            } else { throw new Error('Failed to delete'); }
        } catch (error) { toast.error('Error deleting partner'); }
    }

    async function deleteClient(id: string) {
        if (!confirm('Delete this client?')) return;
        try {
            const res = await fetch(`/api/admin/clients/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setClients(clients.filter(c => c.id !== id));
                toast.success('Client deleted');
            } else { throw new Error('Failed to delete'); }
        } catch (error) { toast.error('Error deleting client'); }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Partners & Clients</h2>
                    <p className="text-slate-500">Manage your business connections.</p>
                </div>
            </div>

            <Tabs defaultValue="partners" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="partners">Partners</TabsTrigger>
                    <TabsTrigger value="clients">Clients</TabsTrigger>
                </TabsList>

                <TabsContent value="partners">
                    <div className="flex justify-end mb-4">
                        <Dialog open={isPartnerOpen} onOpenChange={(open) => {
                            setIsPartnerOpen(open);
                            if (!open) setEditingPartner(null);
                        }}>
                            <DialogTrigger asChild><Button className="bg-red-600"><Plus className="mr-2 h-4 w-4" /> Add Partner</Button></DialogTrigger>
                            <DialogContent>
                                <DialogHeader><DialogTitle>{editingPartner ? 'Edit Partner' : 'Add Partner'}</DialogTitle></DialogHeader>
                                <form onSubmit={handlePartnerSave} className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <Label>Logo</Label>
                                        <ImageUpload
                                            value={partnerForm.logo}
                                            onChange={(url) => setPartnerForm({ ...partnerForm, logo: url })}
                                            onRemove={() => setPartnerForm({ ...partnerForm, logo: '' })}
                                            endpoint="imageUploader"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Partner Name</Label>
                                        <Input value={partnerForm.name} onChange={e => setPartnerForm({ ...partnerForm, name: e.target.value })} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Website URL</Label>
                                        <Input value={partnerForm.website} onChange={e => setPartnerForm({ ...partnerForm, website: e.target.value })} placeholder="https://" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Category</Label>
                                        <Input value={partnerForm.category} onChange={e => setPartnerForm({ ...partnerForm, category: e.target.value })} placeholder="e.g. Technology" />
                                    </div>
                                    <Button type="submit" className="w-full bg-red-600">Save Partner</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="rounded-md border overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="min-w-[80px]">Logo</TableHead>
                                            <TableHead className="min-w-[150px]">Name</TableHead>
                                            <TableHead className="min-w-[120px]">Website</TableHead>
                                            <TableHead className="min-w-[120px]">Category</TableHead>
                                            <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {partners.map((p) => (
                                            <TableRow key={p.id}>
                                                <TableCell>
                                                    {p.logo && <img src={p.logo} alt={p.name} className="h-8 w-auto object-contain" />}
                                                </TableCell>
                                                <TableCell className="font-medium">{p.name}</TableCell>
                                                <TableCell>
                                                    {p.website && <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">
                                                        Visit <ExternalLink className="h-3 w-3" />
                                                    </a>}
                                                </TableCell>
                                                <TableCell><span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">{p.category || 'N/A'}</span></TableCell>
                                                <TableCell className="text-right space-x-2">
                                                    <Button variant="outline" size="icon" onClick={() => { setEditingPartner(p); setIsPartnerOpen(true); }}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500" onClick={() => deletePartner(p.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        {partners.length === 0 && !loading && <TableRow><TableCell colSpan={5} className="text-center">No partners found.</TableCell></TableRow>}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="clients">
                    <div className="flex justify-end mb-4">
                        <Dialog open={isClientOpen} onOpenChange={(open) => {
                            setIsClientOpen(open);
                            if (!open) setEditingClient(null);
                        }}>
                            <DialogTrigger asChild><Button className="bg-red-600"><Plus className="mr-2 h-4 w-4" /> Add Client</Button></DialogTrigger>
                            <DialogContent>
                                <DialogHeader><DialogTitle>{editingClient ? 'Edit Client' : 'Add Client'}</DialogTitle></DialogHeader>
                                <form onSubmit={handleClientSave} className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <Label>Logo</Label>
                                        <ImageUpload
                                            value={clientForm.logo}
                                            onChange={(url) => setClientForm({ ...clientForm, logo: url })}
                                            onRemove={() => setClientForm({ ...clientForm, logo: '' })}
                                            endpoint="imageUploader"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Client Name</Label>
                                        <Input value={clientForm.name} onChange={e => setClientForm({ ...clientForm, name: e.target.value })} required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Category</Label>
                                        <Input value={clientForm.category} onChange={e => setClientForm({ ...clientForm, category: e.target.value })} placeholder="e.g. Retail, Government" />
                                    </div>
                                    <Button type="submit" className="w-full bg-red-600">Save Client</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="rounded-md border overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="min-w-[80px]">Logo</TableHead>
                                            <TableHead className="min-w-[150px]">Name</TableHead>
                                            <TableHead className="min-w-[120px]">Category</TableHead>
                                            <TableHead className="text-right min-w-[100px]">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {clients.map((c) => (
                                            <TableRow key={c.id}>
                                                <TableCell>
                                                    {c.logo && <img src={c.logo} alt={c.name} className="h-8 w-auto object-contain" />}
                                                </TableCell>
                                                <TableCell className="font-medium">{c.name}</TableCell>
                                                <TableCell><span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">{c.category || 'N/A'}</span></TableCell>
                                                <TableCell className="text-right space-x-2">
                                                    <Button variant="outline" size="icon" onClick={() => { setEditingClient(c); setIsClientOpen(true); }}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="text-red-500" onClick={() => deleteClient(c.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        {clients.length === 0 && !loading && <TableRow><TableCell colSpan={4} className="text-center">No clients found.</TableCell></TableRow>}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
