import FAQs from '@/components/about/FAQs';
import Hero from '@/components/about/Hero';
import Team from '@/components/about/Team';
import Vision from '@/components/about/Vision';

export const metadata = {
  title: 'About Us',
  description:
    "Learn more about Health Sync's mission to improve health and wellness through innovative solutions. Discover our commitment to helping you achieve a healthier lifestyle. Meet the dedicated team behind Health Sync.",
};

export default function About() {
  return (
    <section>
      <div className='max-w-9xl mx-auto px-4 sm:px-6'>
        <div className='space-y-14 pt-28 pb-12 md:pb-20 lg:space-y-20'>
          <Hero />
          <Team />
          <Vision />
          <FAQs />
        </div>
      </div>
    </section>
  );
}
