'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#1E3A5F' : '#6B7280';

  return (
    <nav className="bg-white border-b" style={{ borderColor: '#E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="River Ventures Inc"
                width={200}
                height={60}
                style={{ objectFit: 'contain', height: '52px', width: 'auto' }}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/contact" style={{ color: linkColor('/contact') }} className="hover:opacity-80 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
              <Link href="/privacy" style={{ color: linkColor('/privacy') }} className="hover:opacity-80 px-3 py-2 text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" style={{ color: linkColor('/terms') }} className="hover:opacity-80 px-3 py-2 text-sm font-medium">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
