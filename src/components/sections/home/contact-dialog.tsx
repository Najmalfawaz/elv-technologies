'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const emirates = ['Abu Dhabi', 'Dubai', 'Sharjah', 'Umm Al Quwain', 'Ajman', 'Ras Al Khaimah', 'Fujairah'];

export default function ContactDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    emirate: '',
    requirement: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Email addresses must match';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+971|0)[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid UAE phone number format';
    }
    if (!formData.emirate) newErrors.emirate = 'Emirate is required';
    if (!formData.requirement.trim()) newErrors.requirement = 'Requirement is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Sanitize form data before sending to the server to prevent XSS attacks.
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setFormData({ name: '', email: '', confirmEmail: '', phone: '', emirate: '', requirement: '' });
      setTimeout(() => {
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
        <DialogHeader className="sr-only">
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form to get in touch with our team for customized solutions.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row relative">
          <div className="w-full md:w-1/3 bg-primary p-8 text-white flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <h2 className="text-2xl font-bold mb-2">Talk to an Expert</h2>
            <p>Get in touch with our team for customized solutions</p>
          </div>
          <div className="w-full md:w-2/3 p-8 relative">
            <DialogClose className="absolute top-4 right-4 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 transition-colors">
              <X className="h-6 w-6" />
            </DialogClose>
            {showSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                <p className="text-green-900 font-semibold text-2xl mb-2">Thank you for reaching out!</p>
                <p className="text-green-800 text-lg">An expert from ELV Technology Solutions will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={errors.name ? 'border-red-500' : ''} />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+971 XX XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={errors.phone ? 'border-red-500' : ''} />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={errors.email ? 'border-red-500' : ''} />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="confirm-email">Confirm Email *</Label>
                    <Input id="confirm-email" type="email" placeholder="Confirm your email" value={formData.confirmEmail} onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })} className={errors.confirmEmail ? 'border-red-500' : ''} />
                    {errors.confirmEmail && <p className="text-xs text-red-500">{errors.confirmEmail}</p>}
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="emirate">Emirates *</Label>
                  <Select value={formData.emirate} onValueChange={(value) => setFormData({ ...formData, emirate: value })}>
                    <SelectTrigger className={errors.emirate ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select your emirate" />
                    </SelectTrigger>
                    <SelectContent>{emirates.map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}</SelectContent>
                  </Select>
                  {errors.emirate && <p className="text-xs text-red-500">{errors.emirate}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="requirement">Requirement *</Label>
                  <Textarea id="requirement" placeholder="Tell us about your project..." rows={3} value={formData.requirement} onChange={(e) => setFormData({ ...formData, requirement: e.target.value })} className={errors.requirement ? 'border-red-500' : ''} />
                  {errors.requirement && <p className="text-xs text-red-500">{errors.requirement}</p>}
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 rounded-full" size="lg">
                    Submit Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
