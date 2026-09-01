import { FaApple, FaWindows } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const platforms = [
  { label: 'MacOS', Icon: FaApple },
  { label: 'Windows', Icon: FaWindows },
];

/**
 * The "MacOS / Windows" app-download button pair, shared by the header, the
 * mobile menu and the footer. `className` is merged onto each button.
 */
export default function PlatformButtons({ className }) {
  return (
    <>
      {platforms.map(({ label, Icon }) => (
        <Button key={label} size='lg' className={cn('space-x-2', className)}>
          <Icon className='h-5 w-5' />
          <span>{label}</span>
        </Button>
      ))}
    </>
  );
}
