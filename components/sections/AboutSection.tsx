import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { CONTENT, SITE_CONFIG } from '@/lib/contents';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='py-20 bg-slate-50'>
      <Container>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group'>
            <Image
              src='/images/about.webp'
              alt={CONTENT.about.imageAlt}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-500'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
          <div>
            <h2 className='text-sky-500 font-bold tracking-wide uppercase text-sm mb-2'>
              {CONTENT.about.title}
            </h2>
            <h3 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
              {CONTENT.about.subtitle}
            </h3>
            <p className='text-slate-600 mb-4 leading-relaxed'>
              {CONTENT.about.paragraph1}
            </p>
            <p className='text-slate-600 mb-8 leading-relaxed'>
              {CONTENT.about.paragraph2}
            </p>

            <ul className='space-y-3 mb-8'>
              {[
                'Respon Cepat (Hitungan Minit)',
                'Data Privasi Dijamin Selamat',
                'Kadar Kompetitif & Transparan',
              ].map((item, i) => (
                <li
                  key={i}
                  className='flex items-center gap-3 text-slate-700 font-medium'>
                  <span className='w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs'>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href={SITE_CONFIG.whatsappLink}
              target='_blank'>
              Hubungi Kami
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
