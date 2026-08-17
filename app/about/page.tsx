import Link from 'next/link';
import { Building2, Globe, TrendingUp, Shield, Users, Scale } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Page Header */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#1E3A5F' }}>About River Ventures Inc</p>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#111827' }}>
              A Delaware Holding Company Built for Long-Term Value
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#4B5563' }}>
              River Ventures Inc is a privately held holding company incorporated in the State of Delaware. We acquire, invest in, and provide strategic oversight to a diversified portfolio of operating companies across multiple industries.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: '4px', backgroundColor: '#1E3A5F' }} />

      {/* Corporate Overview */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>Our Corporate Structure</h2>
              <p className="text-lg mb-5 leading-relaxed" style={{ color: '#4B5563' }}>
                River Ventures Inc serves as the parent holding entity for a family of operating companies. Each subsidiary operates independently under its own brand identity, while benefiting from the capital resources, governance infrastructure, and strategic guidance of the parent company.
              </p>
              <p className="text-lg mb-5 leading-relaxed" style={{ color: '#4B5563' }}>
                Incorporated on April 1, 2025, River Ventures Inc was established to create a disciplined, scalable platform for business acquisition and growth. Our registered agent is Registered Agent Solutions, Inc., located at 838 Walker Road, Suite 21-2, Dover, Delaware 19904.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                Our corporate headquarters and mailing address is located at 505 N Brand Blvd., 16th Floor, Glendale, CA 91203.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' }}>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: '#9CA3AF' }}>Corporate Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="font-medium" style={{ color: '#374151' }}>Legal Name</dt>
                    <dd style={{ color: '#6B7280' }}>River Ventures Inc</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium" style={{ color: '#374151' }}>State of Incorporation</dt>
                    <dd style={{ color: '#6B7280' }}>Delaware</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium" style={{ color: '#374151' }}>Date Incorporated</dt>
                    <dd style={{ color: '#6B7280' }}>April 1, 2025</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium" style={{ color: '#374151' }}>Fiscal Year End</dt>
                    <dd style={{ color: '#6B7280' }}>December 31</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium" style={{ color: '#374151' }}>Headquarters</dt>
                    <dd style={{ color: '#6B7280' }}>Glendale, CA</dd>
                  </div>
                </dl>
              </div>
              <div className="p-6 rounded-xl border" style={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' }}>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: '#9CA3AF' }}>Portfolio Companies (DBA Filings)</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1E3A5F' }} />
                    <span style={{ color: '#374151' }}>ClearVerify</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1E3A5F' }} />
                    <span style={{ color: '#374151' }}>SwiftVerify</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1E3A5F' }} />
                    <span style={{ color: '#374151' }}>USALVerify</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#111827' }}>Our Guiding Principles</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              The values that guide how we operate, invest, and grow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Scale className="w-10 h-10 mb-4" style={{ color: '#1E3A5F' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>Integrity</h3>
              <p style={{ color: '#6B7280' }}>We operate with transparency and accountability at every level — from corporate governance to day-to-day business decisions across our portfolio.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <TrendingUp className="w-10 h-10 mb-4" style={{ color: '#1E3A5F' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>Long-Term Thinking</h3>
              <p style={{ color: '#6B7280' }}>We prioritize sustainable, long-term value creation over short-term gains. Our investment horizon is measured in years, not quarters.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-10 h-10 mb-4" style={{ color: '#1E3A5F' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>Operational Excellence</h3>
              <p style={{ color: '#6B7280' }}>We support our portfolio companies with the resources, leadership, and infrastructure they need to operate at the highest level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>Corporate Inquiries</h2>
          <p className="text-lg mb-8" style={{ color: '#6B7280' }}>For questions about River Ventures Inc or our portfolio companies, please contact our corporate office.</p>
          <Link href="/contact" className="px-8 py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1E3A5F' }}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
