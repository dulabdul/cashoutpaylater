'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Wallet } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/lib/contents';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Servis', href: '#services' },
    { name: 'Testimoni', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <Container>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='flex items-center gap-2 group'>
            <div className='bg-sky-500 p-2 rounded-lg text-white group-hover:scale-105 transition-transform'>
              <Wallet size={24} />
            </div>
            <span
              className={`text-xl font-bold ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              CashoutPayLater
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-sky-400 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                {link.name}
              </Link>
            ))}
            <Button
              href={SITE_CONFIG.whatsappLink}
              target='_blank'
              variant={isScrolled ? 'primary' : 'white'}
              className='px-5 py-2 text-sm'>
              Hubungi Kami
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className='md:hidden p-2 text-slate-600'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'>
            {isOpen ? (
              <X />
            ) : (
              <Menu
                className={
                  isScrolled
                    ? 'text-slate-900'
                    : 'text-white mix-blend-difference'
                }
              />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-5'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-slate-600 font-medium py-2 w-full text-center hover:bg-slate-50'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button
            href={SITE_CONFIG.whatsappLink}
            target='_blank'
            onClick={() => setIsOpen(false)}>
            Hubungi Kami
          </Button>
        </div>
      )}
    </header>
  );
}
