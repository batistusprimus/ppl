'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/1.png"
              alt="BPC GROUP Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                !isEnglish 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Français
            </Link>
            <Link 
              href="/en" 
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isEnglish 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 