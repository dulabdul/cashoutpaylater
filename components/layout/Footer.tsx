import Link from 'next/link';
import Container from '../ui/Container';

import { Wallet } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/contents';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-300 py-12 border-t border-slate-800'>
      <Container>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div className='col-span-1 md:col-span-2'>
            <Link
              href='/'
              className='flex items-center gap-2 mb-4 text-white'>
              <Wallet className='text-sky-500' />
              <span className='text-xl font-bold'>{SITE_CONFIG.name}</span>
            </Link>
            <p className='text-sm max-w-xs leading-relaxed text-slate-400'>
              {SITE_CONFIG.description}
            </p>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Pautan Pantas</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='#home'
                  className='hover:text-sky-400'>
                  Utama
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='hover:text-sky-400'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='hover:text-sky-400'>
                  Perkhidmatan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Hubungi</h4>
            <p className='text-sm mb-2'>Perkhidmatan 24 Jam</p>
            <a
              href={SITE_CONFIG.whatsappLink}
              target='_blank'
              rel='noreferrer'
              className='text-sm text-sky-400 hover:underline'>
              WhatsApp Support
            </a>
          </div>
        </div>
        <div className='border-t border-slate-800 pt-8 text-center text-xs text-slate-500'>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Hak Cipta
          Terpelihara.
        </div>
      </Container>
    </footer>
  );
}
