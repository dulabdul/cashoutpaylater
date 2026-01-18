'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { CONTENT } from '@/lib/contents';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils'; // Pastikan util ini ada

export default function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id='testimonials'
      className='py-20 bg-slate-50'>
      <Container>
        <div className='text-center mb-12'>
          <h2 className='text-sky-500 font-bold tracking-wide uppercase text-sm mb-2'>
            Bukti & Kepercayaan
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Testimoni Pelanggan
          </h3>
          <p className='text-slate-600 max-w-2xl mx-auto'>
            Lihat bukti transaksi sebenar dari pelanggan yang telah berjaya
            mencairkan limit mereka bersama kami.
          </p>
        </div>

        {/* Slider Container 
          - scrollbar-hide: Menyembunyikan scrollbar native (perlu plugin atau class custom di global css, 
            tapi secara default overflow-x-auto sudah cukup functional).
        */}
        <div className='relative w-full'>
          <div className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 md:px-0 scroll-smooth items-start'>
            {CONTENT.testimonials.map((item) => (
              <div
                key={item.id}
                className='snap-center shrink-0 group cursor-pointer relative'
                onClick={() => setSelectedImage(item.image)}>
                {/* Card Wrapper dengan Rasio Smartphone (9:16)
                  Width diset fixed agar konsisten: 280px (mobile) - 300px (desktop)
                */}
                <div className='w-[260px] md:w-[300px] aspect-[9/18] relative rounded-[2rem] border-8 border-slate-900 bg-slate-800 shadow-xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl'>
                  {/* Notch / Camera styling decoration */}
                  <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-xl z-20'></div>

                  {/* Image Container */}
                  <div className='relative w-full h-full bg-slate-100'>
                    <Image
                      src={item.image} // Ganti dengan path image asli nanti
                      alt={`Bukti WhatsApp ${item.id}`}
                      fill
                      className='object-cover object-top'
                      sizes='(max-width: 768px) 280px, 300px'
                    />

                    {/* Overlay Hover Effect */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <div className='bg-white/90 p-3 rounded-full text-slate-900 shadow-lg backdrop-blur-sm'>
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption / Text di bawah HP */}
                <div className='mt-4 text-center max-w-[260px] md:max-w-[300px] px-2'>
                  <p className='text-sm text-slate-600 italic leading-relaxed'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hint Scroll (Mobile Only) */}
          <div className='text-center text-xs text-slate-400 md:hidden animate-pulse'>
            Geser untuk lihat lagi &rarr;
          </div>
        </div>
      </Container>

      {/* Lightbox Modal (Full Screen View) */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8'
          onClick={() => setSelectedImage(null)}>
          {/* Close Button */}
          <button
            className='absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50'
            aria-label='Tutup gambar'>
            <X size={32} />
          </button>

          {/* Image Wrapper in Modal */}
          <div
            className='relative w-full max-w-sm h-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10'
            onClick={(e) => e.stopPropagation()} // Mencegah close saat klik gambar
          >
            <Image
              src={selectedImage} // Ganti dengan selectedImage
              alt='Bukti WhatsApp Full'
              fill
              className='object-contain bg-black'
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
