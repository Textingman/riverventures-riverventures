'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111827' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>We are here to help. Reach out with any questions, concerns, or feedback.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#111827' }}>Send Us a Message</h2>
            {submitted ? (
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  <svg className="w-8 h-8" style={{ color: '#1E3A5F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>Message Sent!</h3>
                <p style={{ color: '#6B7280' }}>Thank you for reaching out. We will get back to you within 1-2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }}>
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="portfolio">Portfolio Company Inquiry</option>
                    <option value="privacy">Privacy / Data Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-opacity" style={{ backgroundColor: submitting ? '#9CA3AF' : '#1E3A5F', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Email</h3>
                  <a href="mailto:support@riverventurescorporation.com" className="text-base font-medium hover:underline" style={{ color: '#1E3A5F' }}>support@riverventurescorporation.com</a>
                  <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Response within 1-2 business days</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Mailing Address</h3>
                  <p style={{ color: '#6B7280' }}>River Ventures Inc<br />505 N Brand Blvd., 16th Floor<br />Glendale, CA 91203</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Phone</h3>
                  <p style={{ color: '#6B7280' }}>(XXX) XXX-XXXX</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#111827' }}>What does River Ventures Inc do?</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>River Ventures Inc is a Delaware-incorporated holding company that acquires, invests in, and provides strategic oversight to a portfolio of operating companies.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#111827' }}>How can I reach a specific portfolio company?</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>For inquiries related to a specific portfolio company (ClearVerify, SwiftVerify, USALVerify), please contact us and we will direct your inquiry appropriately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
