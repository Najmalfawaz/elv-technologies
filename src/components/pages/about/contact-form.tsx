'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const emirates = [
  'Abu Dhabi',
  'Dubai',
  'Sharjah',
  'Umm Al Quwain',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().regex(/^(?:\+(971)|0)[0-9]{9}$/, { message: 'Please enter a valid UAE phone number' }),
  emirate: z.string().min(1, { message: 'Please select your emirate' }),
  requirement: z.string().min(10, { message: 'Please describe your requirement in at least 10 characters' }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Simulate API submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg max-w-2xl mx-auto shadow-md"
        >
          <h3 className="text-2xl font-bold">Thank you for reaching out!</h3>
          <p className="mt-2">An expert from ELV Technology solution will contact you shortly.</p>
          <p className="mt-4 text-sm font-semibold">ETS – The No.1 AV & ELV Integrators and solution providers in UAE</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="md:col-span-2 text-3xl font-bold text-slate-800 mb-4">Get in Touch with Us</h2>
      
      <div className="relative">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          placeholder="Please enter your name"
          className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="Please enter your or company email address"
          className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      
      <div className="relative">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+(971) / or start with Zero"
          className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      
      <div className="relative">
        <label htmlFor="emirate" className="block text-sm font-medium text-gray-700">Emirates</label>
        <select
          id="emirate"
          {...register('emirate')}
          className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${errors.emirate ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Please select your Emirate</option>
          {emirates.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
        {errors.emirate && <p className="mt-1 text-sm text-red-600">{errors.emirate.message}</p>}
      </div>
      
      <div className="md:col-span-2 relative">
        <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">Requirement</label>
        <textarea
          id="requirement"
          rows={4}
          {...register('requirement')}
          placeholder="How can we help you?"
          className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${errors.requirement ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.requirement && <p className="mt-1 text-sm text-red-600">{errors.requirement.message}</p>}
      </div>
      
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 transition-all"
        >
          {isSubmitting ? 'Submitting...' : 'Done'}
        </button>
      </div>
    </motion.form>
  );
}
