import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline' | 'white';
  target?: string;
}

export default function Button({
  children,
  className,
  href,
  variant = 'primary',
  target,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500 shadow-lg shadow-sky-500/30',
    outline:
      'border-2 border-sky-500 text-sky-600 hover:bg-sky-50 focus:ring-sky-500',
    white: 'bg-white text-sky-600 hover:bg-gray-100 shadow-lg',
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-label={typeof children === 'string' ? children : 'Button'}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}>
      {children}
    </button>
  );
}
