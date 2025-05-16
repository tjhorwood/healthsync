import Image from 'next/image';

import Comments from '@/images/comments.png';
import Menu from '@/images/menu.webp';
import Screen from '@/images/screen.webp';

export default function UIOverview() {
  return (
    <div className='relative mt-28 -mb-24 px-4'>
      {/* Main tablet interface */}
      <div className='relative mx-auto max-w-5xl'>
        <Image src={Screen} alt='Health Sync Interface' />
      </div>

      {/* Left side notifications */}
      <div className='animation-delay-1000 animate-float absolute top-1/4 left-[5%] hidden max-w-sm transform space-y-2 sm:block md:space-y-4'>
        <Image src={Comments} alt='New Juice Recipe' />
      </div>

      {/* Right side menu */}
      <div className='animate-float absolute top-0 right-[10%] hidden max-w-sm transform sm:block'>
        <Image src={Menu} alt='Side Menu' />
      </div>
    </div>
  );
}
