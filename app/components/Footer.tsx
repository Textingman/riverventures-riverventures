import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0F2340' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">River Ventures Inc</h3>
            <p className="text-sm mb-4" style={{ color: '#BFDBFE' }}>
              A Delaware-incorporated holding company providing strategic oversight and capital to a diversified portfolio of operating companies.
            </p>
            <p className="text-xs" style={{ color: '#93C5FD' }}>Incorporated April 1, 2025 · State of Delaware</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/" style={{ color: '#BFDBFE' }} className="hover:text-white text-sm">Home</Link></li>
              <li><Link href="/about" style={{ color: '#BFDBFE' }} className="hover:text-white text-sm">About</Link></li>
              <li><Link href="/contact" style={{ color: '#BFDBFE' }} className="hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Legal & Contact</h4>
            <ul className="space-y-2 mb-4">
              <li><Link href="/privacy" style={{ color: '#BFDBFE' }} className="hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#BFDBFE' }} className="hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
            <p className="text-sm" style={{ color: '#BFDBFE' }}>support@riverventurescorporation.com</p>
            <p className="text-sm mt-1" style={{ color: '#BFDBFE' }}>505 N Brand Blvd., 16th Floor</p>
            <p className="text-sm" style={{ color: '#BFDBFE' }}>Glendale, CA 91203</p>
            <p className="text-sm mt-1" style={{ color: '#BFDBFE' }}>(XXX) XXX-XXXX</p>
          </div>
        </div>
        <div className="mt-10 pt-8 text-center" style={{ borderTop: '1px solid #1E3A5F', color: '#BFDBFE' }}>
          <p className="text-sm">&copy; 2026 River Ventures Inc. All rights reserved. · Glendale, CA · Incorporated in Delaware</p>
        </div>
      </div>
    </footer>
  );
}
