import Image from 'next/image';
import React from 'react';

import GradientText from '@/components/GradientText';
import Fitness from '@/images/fitness.webp';
import Journal from '@/images/journal.png';
import Library from '@/images/library.webp';

export default function Interface() {
  return (
    <div className='max-w-9xl mx-auto px-4 pt-16 pb-32 sm:px-6 lg:px-8'>
      <h2 className='mx-auto mb-12 max-w-6xl text-center text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
        Easy to Use Interface, <GradientText>Fully Customized</GradientText> for
        your preference
      </h2>

      <div className='max-w-8xl relative mx-auto flex items-center justify-center'>
        {/* Main (Library) Screenshot */}
        <div className='relative z-10'>
          <Image src={Library} alt='Library Interface' />
        </div>

        {/* Journal Screenshot (Left) */}
        <div className='animate-float absolute bottom-0 left-0 z-20 w-1/3 -translate-x-1/4 translate-y-16 transform md:w-1/4 md:translate-y-24'>
          <Image src={Journal} alt='Journal Interface' />
        </div>

        {/* Fitness Screenshot (Right) */}
        <div className='animation-delay-1000 animate-float absolute top-0 right-0 z-20 w-1/3 translate-x-1/4 -translate-y-1/4 transform md:w-1/4'>
          <Image src={Fitness} alt='Fitness Interface' />
        </div>
      </div>
    </div>
  );
}
