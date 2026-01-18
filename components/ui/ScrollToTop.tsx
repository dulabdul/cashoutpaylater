'use client';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className='fixed bottom-24 right-6 z-30 bg-white text-slate-800 p-2 rounded-full shadow-md border border-slate-200 hover:bg-slate-100 transition-all'>
      <ArrowUp size={20} />
    </button>
  );
}
