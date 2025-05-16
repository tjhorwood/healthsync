import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Interface from '@/components/home/Interface';
import LaptopVideo from '@/components/home/LaptopVideo';
import Revitalize from '@/components/home/Revitalize';
import UIOverview from '@/components/home/UIOverview';

export default function Home() {
  return (
    <div className='max-w-9xl mx-auto space-y-10'>
      <Hero />
      <LaptopVideo />
      <Features />
      <div>
        <UIOverview />
        <Revitalize />
      </div>
      <Interface />
    </div>
  );
}
