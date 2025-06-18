'use client';
import BaseButton from './BaseButton';
import { twMerge } from 'tailwind-merge';
import { MouseEventHandler } from 'react';

type GhostButtonProps = {
    text?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function GhostButton({
    text = '',
    className = '',
    onClick,
}: GhostButtonProps) {
    return (
        <BaseButton
            text={text}
            onClick={onClick}
            className={twMerge(
                `
                text-sage
                border border-sage 
                bg-transparent
                hover:bg-sage/10
                `,
                className
            )}
        />
    );
}
