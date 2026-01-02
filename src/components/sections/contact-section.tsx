"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const emirates = ["Abu Dhabi", "Dubai", "Sharjah", "Umm Al Quwain", "Ajman", "Ras Al Khaimah", "Fujairah"]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    emirate: "",
    requirement: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^(\+971|0)[0-9]{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number format"
    }

    if (!formData.emirate) {
      newErrors.emirate = "Emirate is required"
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = "Requirement is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData)
      setShowSuccess(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        emirate: "",
        requirement: "",
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 rounded-t-[3rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Talk to an Expert</h2>
          <p className="text-gray-600">Get in touch with our team for customized solutions</p>
        </div>

        {showSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-900 font-semibold mb-2">
              Thank you for reaching out to ELV Technology Solutions. An expert will contact you shortly.
            </p>
            <p className="text-green-800 text-sm">ETS – The No.1 AV & ELV Integrators and solution providers in UAE</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Please enter your or company email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+(971) / or start with zero"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="emirate">Emirates *</Label>
              <Select value={formData.emirate} onValueChange={(value) => setFormData({ ...formData, emirate: value })}>
                <SelectTrigger className={errors.emirate ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your emirate" />
                </SelectTrigger>
                <SelectContent>
                  {emirates.map((emirate) => (
                    <SelectItem key={emirate} value={emirate}>
                      {emirate}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.emirate && <p className="text-sm text-red-500">{errors.emirate}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirement">Requirement *</Label>
            <Textarea
              id="requirement"
              placeholder="How can we help you?"
              rows={5}
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className={errors.requirement ? "border-red-500" : ""}
            />
            {errors.requirement && <p className="text-sm text-red-500">{errors.requirement}</p>}
          </div>

          <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-12" size="lg">
            Done
          </Button>
        </form>
      </div>
    </section>
  )
}
