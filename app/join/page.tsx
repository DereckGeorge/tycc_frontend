"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, User, Mail, Phone, Calendar, FileText, Shield, GraduationCap, Building, Target, Users } from "lucide-react"

interface PersonalInfo {
  first_name: string
  last_name: string
  email: string
  phone: string
  date_of_birth: string
  gender: string
  nationality: string
  region: string
  district: string
  address: string
}

interface Education {
  highest_level: string
  institution: string
  field_of_study: string
  graduation_year: string
}

interface BusinessInfo {
  has_business: boolean
  business_name?: string
  business_type?: string
  business_stage?: string
  registration_status?: string
  employees_count?: string
  annual_revenue?: string
  business_description?: string
}

interface Interests {
  programs_of_interest: string[]
  skills_to_develop: string[]
  mentorship_interest: string
  volunteer_interest: boolean
}

interface Reference {
  name: string
  relationship: string
  phone: string
  email: string
}

interface Agreements {
  terms_and_conditions: boolean
  privacy_policy: boolean
  code_of_conduct: boolean
  newsletter_subscription: boolean
}

interface JoinFormData {
  personal_info: PersonalInfo
  education: Education
  business_info: BusinessInfo
  interests: Interests
  references: Reference[]
  agreements: Agreements
}

export default function JoinPage() {
  const [formData, setFormData] = useState<JoinFormData>({
    personal_info: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      gender: "",
      nationality: "",
      region: "",
      district: "",
      address: "",
    },
    education: {
      highest_level: "",
      institution: "",
      field_of_study: "",
      graduation_year: "",
    },
    business_info: {
      has_business: false,
      business_name: "",
      business_type: "",
      business_stage: "",
      registration_status: "",
      employees_count: "",
      annual_revenue: "",
      business_description: "",
    },
    interests: {
      programs_of_interest: [],
      skills_to_develop: [],
      mentorship_interest: "",
      volunteer_interest: false,
    },
    references: [],
    agreements: {
      terms_and_conditions: false,
      privacy_policy: false,
      code_of_conduct: false,
      newsletter_subscription: false,
    },
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validate required fields
    const { personal_info, agreements } = formData
    if (!personal_info.first_name || !personal_info.last_name || !personal_info.email || 
        !personal_info.phone || !personal_info.date_of_birth || !personal_info.gender ||
        !personal_info.nationality || !personal_info.region || !personal_info.district ||
        !personal_info.address ||
        !agreements.terms_and_conditions || !agreements.privacy_policy || !agreements.code_of_conduct) {
      setError("Please fill in all required fields and accept all required agreements.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://tycc.e-saloon.online/api/v1/join-tycc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          personal_info: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            date_of_birth: "",
            gender: "",
            nationality: "",
            region: "",
            district: "",
            address: "",
          },
          education: {
            highest_level: "",
            institution: "",
            field_of_study: "",
            graduation_year: "",
          },
          business_info: {
            has_business: false,
            business_name: "",
            business_type: "",
            business_stage: "",
            registration_status: "",
            employees_count: "",
            annual_revenue: "",
            business_description: "",
          },
          interests: {
            programs_of_interest: [],
            skills_to_develop: [],
            mentorship_interest: "",
            volunteer_interest: false,
          },
          references: [],
          agreements: {
            terms_and_conditions: false,
            privacy_policy: false,
            code_of_conduct: false,
            newsletter_subscription: false,
          },
        })
      } else {
        setError(result.message || "An error occurred while submitting your application.")
        if (result.data) {
          // Handle validation errors from API
          const errors = Object.values(result.data).flat()
          setError(errors.join(" "))
        }
      }
    } catch (err) {
      setError("Network error. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      personal_info: {
        ...prev.personal_info,
        [name]: value,
      },
    }))
  }

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [name]: value,
      },
    }))
  }

  const handleBusinessInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const target = e.target as HTMLInputElement
    const checked = target.checked
    
    setFormData(prev => ({
      ...prev,
      business_info: {
        ...prev.business_info,
        [name]: target.type === 'checkbox' ? checked : value,
      },
    }))
  }

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const target = e.target as HTMLInputElement
    const checked = target.checked
    
    if (name === 'volunteer_interest') {
      setFormData(prev => ({
        ...prev,
        interests: {
          ...prev.interests,
          volunteer_interest: checked,
        },
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: value,
        },
      }))
    }
  }

  const handleInterestArrayChange = (field: 'programs_of_interest' | 'skills_to_develop', value: string) => {
    setFormData(prev => {
      const currentArray = prev.interests[field]
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value]
      
      return {
        ...prev,
        interests: {
          ...prev.interests,
          [field]: newArray,
        },
      }
    })
  }

  const handleReferencesChange = (index: number, field: keyof Reference, value: string) => {
    setFormData(prev => {
      const newReferences = [...prev.references]
      if (!newReferences[index]) {
        newReferences[index] = { name: '', relationship: '', phone: '', email: '' }
      }
      newReferences[index] = { ...newReferences[index], [field]: value }
      return {
        ...prev,
        references: newReferences,
      }
    })
  }

  const addReference = () => {
    setFormData(prev => ({
      ...prev,
      references: [...prev.references, { name: '', relationship: '', phone: '', email: '' }],
    }))
  }

  const removeReference = (index: number) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index),
    }))
  }

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [name]: checked,
      },
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-tycc-blue mb-4">Application Submitted Successfully!</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for your interest in joining the Tanzania Youth Chamber of Commerce.
                </p>
                <p className="text-gray-600 mb-8">
                  We have received your application and will review it shortly. You will receive an email confirmation
                  and updates about your membership status.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Application
                </button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tycc-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join TYCC</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Become a member of Tanzania's premier youth business network and unlock opportunities for growth, 
              networking, and professional development.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tycc-blue mb-4">Why Join TYCC?</h2>
            <p className="text-lg text-gray-600">Join a community of ambitious young entrepreneurs and professionals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-tycc-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-tycc-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with like-minded young entrepreneurs and business professionals across Tanzania.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tycc-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-tycc-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-gray-600">Access exclusive business resources, training programs, and mentorship opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advocacy</h3>
              <p className="text-gray-600">Be part of a voice that advocates for youth business interests and policy changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-tycc-blue">Membership Application</CardTitle>
              <CardDescription>
                Fill out the form below to apply for TYCC membership. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-tycc-blue" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.personal_info.first_name}
                        onChange={handlePersonalInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.personal_info.last_name}
                        onChange={handlePersonalInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.personal_info.email}
                        onChange={handlePersonalInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.personal_info.phone}
                        onChange={handlePersonalInfoChange}
                        required
                        placeholder="+255 xxx xxx xxx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={formData.personal_info.date_of_birth}
                        onChange={handlePersonalInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.personal_info.gender}
                        onChange={handlePersonalInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
                        Nationality *
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.personal_info.nationality}
                        onChange={handlePersonalInfoChange}
                        required
                        placeholder="e.g., Tanzanian"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                        Region *
                      </label>
                      <select
                        id="region"
                        name="region"
                        value={formData.personal_info.region}
                        onChange={handlePersonalInfoChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      >
                        <option value="">Select Region</option>
                        <option value="Arusha">Arusha</option>
                        <option value="Dar es Salaam">Dar es Salaam</option>
                        <option value="Dodoma">Dodoma</option>
                        <option value="Geita">Geita</option>
                        <option value="Iringa">Iringa</option>
                        <option value="Kagera">Kagera</option>
                        <option value="Katavi">Katavi</option>
                        <option value="Kigoma">Kigoma</option>
                        <option value="Kilimanjaro">Kilimanjaro</option>
                        <option value="Lindi">Lindi</option>
                        <option value="Manyara">Manyara</option>
                        <option value="Mara">Mara</option>
                        <option value="Mbeya">Mbeya</option>
                        <option value="Morogoro">Morogoro</option>
                        <option value="Mtwara">Mtwara</option>
                        <option value="Mwanza">Mwanza</option>
                        <option value="Njombe">Njombe</option>
                        <option value="Pemba North">Pemba North</option>
                        <option value="Pemba South">Pemba South</option>
                        <option value="Pwani">Pwani</option>
                        <option value="Rukwa">Rukwa</option>
                        <option value="Ruvuma">Ruvuma</option>
                        <option value="Shinyanga">Shinyanga</option>
                        <option value="Simiyu">Simiyu</option>
                        <option value="Singida">Singida</option>
                        <option value="Songwe">Songwe</option>
                        <option value="Tabora">Tabora</option>
                        <option value="Tanga">Tanga</option>
                        <option value="Unguja North">Unguja North</option>
                        <option value="Unguja South">Unguja South</option>
                        <option value="Unguja West">Unguja West</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                        District *
                      </label>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={formData.personal_info.district}
                        onChange={handlePersonalInfoChange}
                        required
                        placeholder="e.g., Ilala"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.personal_info.address}
                        onChange={handlePersonalInfoChange}
                        required
                        rows={3}
                        placeholder="Please provide your full address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-tycc-blue" />
                    Education Background (Optional)
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="highest_level" className="block text-sm font-medium text-gray-700 mb-2">
                        Highest Education Level
                      </label>
                      <select
                        id="highest_level"
                        name="highest_level"
                        value={formData.education.highest_level}
                        onChange={handleEducationChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      >
                        <option value="">Select Education Level</option>
                        <option value="primary">Primary Education</option>
                        <option value="secondary">Secondary Education</option>
                        <option value="certificate">Certificate</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                        Institution
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.education.institution}
                        onChange={handleEducationChange}
                        placeholder="e.g., University of Dar es Salaam"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="field_of_study" className="block text-sm font-medium text-gray-700 mb-2">
                        Field of Study
                      </label>
                      <input
                        type="text"
                        id="field_of_study"
                        name="field_of_study"
                        value={formData.education.field_of_study}
                        onChange={handleEducationChange}
                        placeholder="e.g., Business Administration"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="graduation_year" className="block text-sm font-medium text-gray-700 mb-2">
                        Graduation Year
                      </label>
                      <input
                        type="number"
                        id="graduation_year"
                        name="graduation_year"
                        value={formData.education.graduation_year}
                        onChange={handleEducationChange}
                        min="1950"
                        max={new Date().getFullYear() + 10}
                        placeholder="e.g., 2020"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="h-5 w-5 mr-2 text-tycc-blue" />
                    Business Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="has_business"
                        name="has_business"
                        checked={formData.business_info.has_business}
                        onChange={handleBusinessInfoChange}
                        className="h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                      />
                      <label htmlFor="has_business" className="text-sm font-medium text-gray-700">
                        I currently own or run a business
                      </label>
                    </div>
                    
                    {formData.business_info.has_business && (
                      <div className="grid md:grid-cols-2 gap-6 pl-7">
                        <div>
                          <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name
                          </label>
                          <input
                            type="text"
                            id="business_name"
                            name="business_name"
                            value={formData.business_info.business_name}
                            onChange={handleBusinessInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="business_type" className="block text-sm font-medium text-gray-700 mb-2">
                            Business Type
                          </label>
                          <select
                            id="business_type"
                            name="business_type"
                            value={formData.business_info.business_type}
                            onChange={handleBusinessInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          >
                            <option value="">Select Business Type</option>
                            <option value="sole_proprietorship">Sole Proprietorship</option>
                            <option value="partnership">Partnership</option>
                            <option value="limited_company">Limited Company</option>
                            <option value="cooperative">Cooperative</option>
                            <option value="ngo">NGO/Non-Profit</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="business_stage" className="block text-sm font-medium text-gray-700 mb-2">
                            Business Stage
                          </label>
                          <select
                            id="business_stage"
                            name="business_stage"
                            value={formData.business_info.business_stage}
                            onChange={handleBusinessInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          >
                            <option value="">Select Business Stage</option>
                            <option value="idea">Idea Stage</option>
                            <option value="startup">Startup</option>
                            <option value="growth">Growth Stage</option>
                            <option value="established">Established</option>
                            <option value="expansion">Expansion</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="registration_status" className="block text-sm font-medium text-gray-700 mb-2">
                            Registration Status
                          </label>
                          <select
                            id="registration_status"
                            name="registration_status"
                            value={formData.business_info.registration_status}
                            onChange={handleBusinessInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          >
                            <option value="">Select Registration Status</option>
                            <option value="registered">Registered</option>
                            <option value="in_process">Registration in Process</option>
                            <option value="not_registered">Not Registered</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="employees_count" className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Employees
                          </label>
                          <select
                            id="employees_count"
                            name="employees_count"
                            value={formData.business_info.employees_count}
                            onChange={handleBusinessInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          >
                            <option value="">Select Employee Count</option>
                            <option value="1">Just me</option>
                            <option value="2-5">2-5 employees</option>
                            <option value="6-10">6-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-100">51-100 employees</option>
                            <option value="100+">100+ employees</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="annual_revenue" className="block text-sm font-medium text-gray-700 mb-2">
                            Annual Revenue (TSH)
                          </label>
                          <select
                            id="annual_revenue"
                            name="annual_revenue"
                            value={formData.business_info.annual_revenue}
                            onChange={handleBusinessInfoChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          >
                            <option value="">Select Revenue Range</option>
                            <option value="0-1M">Less than 1M TSH</option>
                            <option value="1M-5M">1M - 5M TSH</option>
                            <option value="5M-10M">5M - 10M TSH</option>
                            <option value="10M-50M">10M - 50M TSH</option>
                            <option value="50M-100M">50M - 100M TSH</option>
                            <option value="100M+">100M+ TSH</option>
                          </select>
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="business_description" className="block text-sm font-medium text-gray-700 mb-2">
                            Business Description
                          </label>
                          <textarea
                            id="business_description"
                            name="business_description"
                            value={formData.business_info.business_description}
                            onChange={handleBusinessInfoChange}
                            rows={3}
                            placeholder="Briefly describe your business"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Interests */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-tycc-blue" />
                    Areas of Interest
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Programs of Interest
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'entrepreneurship', label: 'Entrepreneurship Training' },
                          { value: 'leadership', label: 'Leadership Development' },
                          { value: 'networking', label: 'Networking Events' },
                          { value: 'mentorship', label: 'Mentorship Program' },
                          { value: 'advocacy', label: 'Youth Advocacy' },
                          { value: 'innovation', label: 'Innovation Hub' },
                          { value: 'digital_marketing', label: 'Digital Marketing' },
                          { value: 'finance', label: 'Financial Management' },
                        ].map((program) => (
                          <div key={program.value} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`program_${program.value}`}
                              checked={formData.interests.programs_of_interest.includes(program.value)}
                              onChange={() => handleInterestArrayChange('programs_of_interest', program.value)}
                              className="h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                            />
                            <label htmlFor={`program_${program.value}`} className="text-sm text-gray-700">
                              {program.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Skills to Develop
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'financial_management', label: 'Financial Management' },
                          { value: 'marketing', label: 'Marketing & Sales' },
                          { value: 'team_leadership', label: 'Team Leadership' },
                          { value: 'public_speaking', label: 'Public Speaking' },
                          { value: 'negotiation', label: 'Negotiation Skills' },
                          { value: 'project_management', label: 'Project Management' },
                          { value: 'digital_skills', label: 'Digital Skills' },
                          { value: 'strategic_planning', label: 'Strategic Planning' },
                        ].map((skill) => (
                          <div key={skill.value} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`skill_${skill.value}`}
                              checked={formData.interests.skills_to_develop.includes(skill.value)}
                              onChange={() => handleInterestArrayChange('skills_to_develop', skill.value)}
                              className="h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                            />
                            <label htmlFor={`skill_${skill.value}`} className="text-sm text-gray-700">
                              {skill.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="mentorship_interest" className="block text-sm font-medium text-gray-700 mb-2">
                          Mentorship Interest
                        </label>
                        <select
                          id="mentorship_interest"
                          name="mentorship_interest"
                          value={formData.interests.mentorship_interest}
                          onChange={handleInterestsChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                        >
                          <option value="">Select Option</option>
                          <option value="mentee">I am seeking a mentor</option>
                          <option value="mentor">I am willing to be a mentor</option>
                          <option value="both">Both</option>
                          <option value="none">Not interested</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Volunteer Interest
                        </label>
                        <div className="flex items-center space-x-3 mt-3">
                          <input
                            type="checkbox"
                            id="volunteer_interest"
                            name="volunteer_interest"
                            checked={formData.interests.volunteer_interest}
                            onChange={handleInterestsChange}
                            className="h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                          />
                          <label htmlFor="volunteer_interest" className="text-sm text-gray-700">
                            I am interested in volunteering for TYCC activities
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-tycc-blue" />
                    References
                  </h3>
                  
                  <div className="space-y-6">
                    {formData.references.map((reference, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-md font-medium text-gray-900">Reference {index + 1}</h4>
                          {formData.references.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeReference(index)}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor={`ref_name_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id={`ref_name_${index}`}
                              value={reference.name}
                              onChange={(e) => handleReferencesChange(index, 'name', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                              placeholder="e.g., John Doe"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor={`ref_relationship_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Relationship
                            </label>
                            <input
                              type="text"
                              id={`ref_relationship_${index}`}
                              value={reference.relationship}
                              onChange={(e) => handleReferencesChange(index, 'relationship', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                              placeholder="e.g., Business Partner, Supervisor"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor={`ref_phone_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id={`ref_phone_${index}`}
                              value={reference.phone}
                              onChange={(e) => handleReferencesChange(index, 'phone', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                              placeholder="+255 xxx xxx xxx"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor={`ref_email_${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id={`ref_email_${index}`}
                              value={reference.email}
                              onChange={(e) => handleReferencesChange(index, 'email', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tycc-blue focus:border-transparent"
                              placeholder="reference@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {formData.references.length === 0 && (
                      <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-500 mb-4">No references added yet</p>
                        <button
                          type="button"
                          onClick={addReference}
                          className="btn-secondary"
                        >
                          Add Reference
                        </button>
                      </div>
                    )}
                    
                    {formData.references.length > 0 && formData.references.length < 3 && (
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={addReference}
                          className="btn-secondary"
                        >
                          Add Another Reference
                        </button>
                      </div>
                    )}
                    
                    <p className="text-sm text-gray-600">
                      Please provide 1-3 professional references who can speak to your character and abilities.
                    </p>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-tycc-blue" />
                    Terms and Agreements
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms_and_conditions"
                        name="terms_and_conditions"
                        checked={formData.agreements.terms_and_conditions}
                        onChange={handleAgreementChange}
                        required
                        className="mt-1 h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                      />
                      <label htmlFor="terms_and_conditions" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-tycc-blue hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        of the Tanzania Youth Chamber of Commerce. *
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacy_policy"
                        name="privacy_policy"
                        checked={formData.agreements.privacy_policy}
                        onChange={handleAgreementChange}
                        required
                        className="mt-1 h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                      />
                      <label htmlFor="privacy_policy" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-tycc-blue hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and consent to the processing of my personal data. *
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="code_of_conduct"
                        name="code_of_conduct"
                        checked={formData.agreements.code_of_conduct}
                        onChange={handleAgreementChange}
                        required
                        className="mt-1 h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                      />
                      <label htmlFor="code_of_conduct" className="text-sm text-gray-700">
                        I agree to abide by the{" "}
                        <a href="#" className="text-tycc-blue hover:underline">
                          Code of Conduct
                        </a>{" "}
                        of TYCC. *
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="newsletter_subscription"
                        name="newsletter_subscription"
                        checked={formData.agreements.newsletter_subscription}
                        onChange={handleAgreementChange}
                        className="mt-1 h-4 w-4 text-tycc-blue focus:ring-tycc-blue border-gray-300 rounded"
                      />
                      <label htmlFor="newsletter_subscription" className="text-sm text-gray-700">
                        I would like to receive newsletters and updates from TYCC.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
} 