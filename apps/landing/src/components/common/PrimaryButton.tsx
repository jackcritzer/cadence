import BaseButton from './BaseButton';
import { twMerge } from 'tailwind-merge';

export default function PrimaryButton(props: React.ComponentProps<typeof BaseButton>) {
  return (
    <BaseButton
      {...props}
      className={twMerge('bg-mustard text-white hover:bg-mustard-600', props.className)}
    />
  );
}