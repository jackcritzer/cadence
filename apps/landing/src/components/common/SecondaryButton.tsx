import BaseButton from './BaseButton';
import { twMerge } from 'tailwind-merge';

export default function SecondaryButton(props: React.ComponentProps<typeof BaseButton>) {
  return (
    <BaseButton
      {...props}
      className={twMerge('bg-sage text-white hover:bg-[#78944E]', props.className)}
    />
  );
}