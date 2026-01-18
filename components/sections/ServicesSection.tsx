import Container from '../ui/Container';
import { CONTENT } from '@/lib/contents';
import { ShoppingBag, Zap, Car } from 'lucide-react';

const icons = {
  'shopping-bag': ShoppingBag,
  zap: Zap,
  car: Car,
};

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='py-20 bg-white'>
      <Container>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            KHIDMAT KAMI
          </h2>
          <p className='text-slate-600'>
            Kami melayani pencairan pelbagai jenis PayLater popular di Malaysia.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {CONTENT.services.map((service, idx) => {
            const Icon = icons[service.icon as keyof typeof icons] || Zap;
            return (
              <div
                key={idx}
                className='group bg-slate-50 p-8 rounded-2xl hover:bg-sky-500 transition-colors duration-300 border border-slate-100 hover:shadow-xl'>
                <div className='w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-500 transition-colors'>
                  <Icon size={32} />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-white'>
                  {service.title}
                </h3>
                <p className='text-slate-600 group-hover:text-sky-100 leading-relaxed'>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
