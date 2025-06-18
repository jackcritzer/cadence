'use client';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BaseButtonProps = {
  className?: string;
  text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BaseButton({
  className = '',
  text,
  children,
  ...props
}: BaseButtonProps) {
  return (
    <button
      className={twMerge(`
        px-6 py-2
        rounded-lg
        text-base font-medium
        transition-colors duration-100 ease-in-out
        h-fit min-w-fit
        cursor-pointer
      `, className)}
      {...props}
    >
      {text ?? children}
    </button>
  );
}
