import React from 'react';
import { Download } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const navItems = [
    { label: 'Education', href: '#education' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="flex items-center gap-8">
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/resume.pdf"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          isScrolled
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <Download className="w-4 h-4" />
        <span>Resume</span>
      </a>
    </nav>
  );
}