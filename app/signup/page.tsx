'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      <section className="py-12" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111827' }}>
            Get in Touch with River Ventures
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Interested in partnering with us or learning more about our portfolio? Reach out and we will be in touch.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" style={{ border: '1px solid #E5E7EB' }}>
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DBEAFE' }}>
                <svg className="w-10 h-10" style={{ color: '#1E3A5F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>Message Received</h2>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>Thank you for reaching out. Our team will be in touch within 1-2 business days.</p>
              <Link href="/" className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1E3A5F' }}>
                Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none" style={{ borderColor: '#E5E7EB' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none" style={{ borderColor: '#E5E7EB' }} />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 555-5555" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none" style={{ borderColor: '#E5E7EB' }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>Message</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your inquiry..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none" style={{ borderColor: '#E5E7EB' }} />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="termsAgreement" required className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#1E3A5F' }} />
                <label htmlFor="termsAgreement" className="text-sm" style={{ color: '#6B7280' }}>
                  I have read and agree to the{' '}
                  <a href="/privacy" style={{ color: '#1E3A5F' }} className="underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" style={{ color: '#1E3A5F' }} className="underline">Terms of Service</a>. *
                </label>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-4 text-white text-lg font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#1E3A5F' }}>
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
