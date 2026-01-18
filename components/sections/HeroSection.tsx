'use client';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

import { motion } from 'framer-motion';
import { CONTENT, SITE_CONFIG } from '@/lib/contents';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center pt-16 overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero1.jpg'
          alt='Finance Background'
          fill
          priority
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-slate-900/40 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent' />
      </div>

      <Container className='relative z-10 w-full'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='max-w-2xl'>
            <span className='inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 text-sm font-semibold mb-4 border border-sky-500/30'>
              #1 Perkhidmatan Tunai Dipercayai
            </span>
            <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight mb-6'>
              {CONTENT.hero.headline} <br />
              <span className='text-sky-500'>{CONTENT.hero.subHeadline}</span>
            </h1>
            <p className='text-lg text-slate-300 mb-8 leading-relaxed'>
              {CONTENT.hero.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                href={SITE_CONFIG.whatsappLink}
                target='_blank'
                className='text-lg px-8'>
                {CONTENT.hero.cta}
              </Button>
              <Button
                href='#about'
                variant='outline'
                className='text-lg px-8 border-slate-500 text-slate-300 hover:bg-slate-800 hover:border-slate-400'>
                Ketahui Lanjut
              </Button>
            </div>
          </motion.div>

          {/* Decorative / Mobile Hidden Element if needed */}
        </div>
      </Container>
    </section>
  );
}
