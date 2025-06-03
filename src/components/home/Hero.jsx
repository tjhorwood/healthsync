'use client';
import Image from 'next/image';
import Link from 'next/link';

import GradientText from '@/components/GradientText';
import { Button } from '@/components/ui/button';
import Laptop from '@/images/laptop.webp';

export default function HeroHome() {
  return (
    <section className='relative mx-auto w-full px-4 sm:px-6'>
      <div className='flex flex-col space-y-8 pt-32 pb-12 md:pt-40 md:pb-20 lg:flex-row'>
        <div className='w-full'>
          <h1
            className='leading-tighter text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
            data-aos='zoom-y-out'
          >
            Your New Holistic
            <br />
            <GradientText>Wellness Hub</GradientText>
          </h1>
          <div className='mt-6 max-w-3xl space-y-8'>
            <p
              className='text-gray-600 md:text-lg lg:text-xl'
              data-aos='zoom-y-out'
              data-aos-delay='150'
            >
              Health Sync™ an app crafted to elevate your productivity, enhance
              your focus, and support your overall well-being. Whether you are
              looking to boost your daily performance or take better care of
              both your mind and body, this app provides the tools and guidance
              you need to thrive.
            </p>
            <div
              className='flex flex-col items-start gap-6'
              data-aos='zoom-y-out'
              data-aos-delay='150'
            >
              <Link href='/about'>
                <Button
                  size='lg'
                  className='text-md bg-gray-900 text-white hover:bg-gray-800 sm:w-auto lg:text-lg'
                >
                  Learn more
                </Button>
              </Link>
              <div className='flex items-center justify-between sm:max-w-xs'>
                <p className='w-full'>
                  Brought to you by:{' '}
                  <GradientText className='text-lg font-semibold italic'>
                    Your Healthplan
                  </GradientText>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='relative max-w-full'
          data-aos='zoom-y-out'
          data-aos-delay='150'
        >
          <div className='absolute inset-0 z-0 mx-auto h-[275px] w-[275px] rounded-full bg-linear-to-bl from-blue-500/80 to-teal-400/80 to-75% sm:h-[400px] sm:w-[400px]'></div>
          <Image
            src={Laptop}
            alt='laptop'
            className='relative z-10 mx-auto sm:max-w-[500px] lg:max-w-full'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
