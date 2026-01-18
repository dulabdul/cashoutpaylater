import Container from '../ui/Container';
import { CONTENT } from '@/lib/contents';

export default function StatsSection() {
  return (
    <section className='relative -mt-20 z-20 pb-12'>
      <Container>
        <div className='bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b-4 border-sky-500'>
          {CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className='space-y-2 md:border-r last:border-0 border-slate-100'>
              <p className='text-4xl font-bold text-slate-800'>{stat.value}</p>
              <p className='text-slate-500 font-medium uppercase tracking-wider text-sm'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
