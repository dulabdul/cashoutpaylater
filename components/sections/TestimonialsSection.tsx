'use client';
import { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import { CONTENT } from '@/lib/contents';
import { X } from 'lucide-react';

export default function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id='testimonials'
      className='py-20 bg-slate-50'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-slate-900'>Bukti Transaksi</h2>
          <p className='text-slate-600 mt-2'>
            Apa kata pelanggan kami yang berpuas hati
          </p>
        </div>

        {/* CSS Scroll Snap Slider for simplicity & performance */}
        <div className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 scrollbar-hide'>
          {CONTENT.testimonials.map((item) => (
            <div
              key={item.id}
              className='snap-center shrink-0 w-[300px] md:w-[350px] bg-white p-4 rounded-xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow'
              onClick={() => setSelectedImage(item.image)}>
              <div className='relative h-64 w-full mb-4 rounded-lg overflow-hidden bg-slate-200'>
                <Image
                  src={`https://placehold.co/350x600/e2e8f0/0ea5e9?text=Bukti+WA+${item.id}`} // Replace with item.image in real usage
                  alt={`Testimoni ${item.id}`}
                  fill
                  className='object-cover hover:scale-105 transition-transform'
                />
              </div>
              <p className='text-sm text-slate-600 italic'>"{item.text}"</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}>
          <button className='absolute top-6 right-6 text-white p-2'>
            <X size={32} />
          </button>
          <div className='relative max-w-sm w-full h-[80vh]'>
            <Image
              src={`https://placehold.co/350x600/e2e8f0/0ea5e9?text=Bukti+WA+Full`} // Replace with selectedImage
              alt='Testimonial Full'
              fill
              className='object-contain'
            />
          </div>
        </div>
      )}
    </section>
  );
}
