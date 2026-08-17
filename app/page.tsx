import Link from 'next/link';
import { Building2, Globe, TrendingUp, Shield, Users, Briefcase } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-28" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-widest" style={{ backgroundColor: '#DBEAFE', color: '#1E3A5F' }}>
              <Building2 className="w-4 h-4" />
              Incorporated in Delaware · Est. 2025
            </div>
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl leading-tight" style={{ color: '#111827' }}>
              River Ventures Inc
            </h1>
            <p className="mt-4 text-2xl font-light" style={{ color: '#1E3A5F' }}>
              A Diversified Holding Company
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-relaxed" style={{ color: '#4B5563' }}>
              River Ventures Inc acquires, invests in, and provides strategic oversight to a portfolio of companies across multiple industries. We are committed to long-term value creation through disciplined capital allocation and operational excellence.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/about" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1E3A5F' }}>
                About Our Company
              </Link>
              <Link href="/contact" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#1E3A5F', borderColor: '#1E3A5F', backgroundColor: '#FFFFFF' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '4px', backgroundColor: '#1E3A5F' }} />

      {/* What We Do */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#111827' }}>What We Do</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              River Ventures Inc serves as the parent entity for a growing portfolio of operating companies, providing capital, governance, and strategic direction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border-l-4" style={{ borderLeftColor: '#1E3A5F', backgroundColor: '#F9FAFB' }}>
              <TrendingUp className="w-10 h-10 mb-4" style={{ color: '#1E3A5F' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>Strategic Investment</h3>
              <p style={{ color: '#6B7280' }}>We identify and invest in businesses with strong fundamentals and long-term growth potential across diverse market sectors.</p>
            </div>
            <div className="p-8 rounded-xl border-l-4" style={{ borderLeftColor: '#1E3A5F', backgroundColor: '#F9FAFB' }}>
              <Shield className="w-10 h-10 mb-4" style={{ color: '#1E3A5F' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>Corporate Governance</h3>
              <p style={{ color: '#6B7280' }}>We provide oversight, compliance infrastructure, and governance frameworks that enable our portfolio companies to operate with integrity and accountability.</p>
            </div>
            <div className="p-8 rounded-xl border-l-4" style={{ borderLeftColor: '#1E3A5F', backgroundColor: '#F9FAFB' }}>
              <Briefcase className="w-10 h-10 mb-4" style={{ color: '#1E3A5F' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>Operational Support</h3>
              <p style={{ color: '#6B7280' }}>Our portfolio companies benefit from shared resources, executive leadership, and operational expertise that accelerates growth and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#111827' }}>Our Portfolio</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              River Ventures Inc operates through a family of companies, each serving distinct markets under dedicated brand identities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <Globe className="w-6 h-6" style={{ color: '#1E3A5F' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#111827' }}>ClearVerify</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>Identity and data verification services providing clear, reliable verification solutions for businesses and consumers.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <Globe className="w-6 h-6" style={{ color: '#1E3A5F' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#111827' }}>SwiftVerify</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>Fast, accurate verification services designed for speed and reliability in high-volume environments.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <Globe className="w-6 h-6" style={{ color: '#1E3A5F' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#111827' }}>USALVerify</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>Comprehensive verification solutions tailored for the U.S. market, ensuring compliance and accuracy at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Info Strip */}
      <section className="py-16" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">2025</p>
              <p className="mt-1 text-sm uppercase tracking-wide" style={{ color: '#BFDBFE' }}>Year Incorporated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Delaware</p>
              <p className="mt-1 text-sm uppercase tracking-wide" style={{ color: '#BFDBFE' }}>State of Incorporation</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="mt-1 text-sm uppercase tracking-wide" style={{ color: '#BFDBFE' }}>Portfolio Companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Glendale, CA</p>
              <p className="mt-1 text-sm uppercase tracking-wide" style={{ color: '#BFDBFE' }}>Headquarters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#111827' }}>Get in Touch</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>For inquiries regarding River Ventures Inc or our portfolio companies, please reach out to our corporate office.</p>
          <Link href="/contact" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#1E3A5F' }}>
            Contact Corporate Office
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
