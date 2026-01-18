import Container from '../ui/Container';
import { CONTENT } from '@/lib/contents';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className='py-20 bg-slate-900 text-white'>
      <Container>
        <div className='grid md:grid-cols-2 gap-16'>
          <div>
            <h2 className='text-sky-400 font-bold uppercase tracking-wide text-sm mb-2'>
              Kenapa Kami?
            </h2>
            <h3 className='text-3xl md:text-4xl font-bold mb-6'>
              Why Choose Us
            </h3>
            <p className='text-slate-400 leading-relaxed mb-6'>
              Memilih perkhidmatan kami bermaksud anda mengutamakan kepantasan,
              keselamatan dan kemudahan. Kami memahami bahawa keperluan dana
              yang mendesak tidak boleh ditangguhkan.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 gap-x-8 gap-y-10'>
            {CONTENT.whyUs.map((item, idx) => (
              <div
                key={idx}
                className='flex gap-4'>
                <CheckCircle2 className='text-sky-500 shrink-0 mt-1' />
                <div>
                  <h4 className='font-bold text-lg mb-1'>{item.title}</h4>
                  <p className='text-sm text-slate-400'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
