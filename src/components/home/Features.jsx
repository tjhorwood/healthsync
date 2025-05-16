import GradientText from '@/components/GradientText';
import { cn } from '@/lib/utils';
import { FaCheck, FaThumbsUp } from 'react-icons/fa';
import { GiHealthIncrease, GiInspiration } from 'react-icons/gi';

const features = [
  {
    icon: <FaThumbsUp className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Simple to Use',
    iconClassName: 'bg-emerald-400',
    description:
      'Simple to use interface which has fresh daily content everyday!',
  },
  {
    icon: <FaCheck className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Health Insurance Approved',
    description:
      'Reimbursement approved fitness programs and integrated physicians to help guide your whole health journey',
    iconClassName: 'bg-yellow-400',
    containerClassName: 'animation-delay-500',
  },
  {
    icon: <GiHealthIncrease className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Focus on Whole Health',
    description:
      'Bodyweight exercises, kettlebell, yoga, guided meditation, breathwork and more! All can be done from your home',
    iconClassName: 'bg-sky-400',
    containerClassName: 'animation-delay-1000',
  },
  {
    icon: <GiInspiration className='h-10 w-10 text-white lg:h-12 lg:w-12' />,
    title: 'Become an Inspiration',
    description:
      'A parent guide on how to incorporate well-being at home with children',
    iconClassName: 'bg-pink-400',
    containerClassName: 'animation-delay-1500',
  },
];

const FeatureItem = ({
  icon,
  title,
  description,
  containerClassName,
  iconClassName,
}) => (
  <div
    className={cn(
      `lg:animate-float flex h-full w-full flex-col items-center lg:odd:pt-10 lg:even:pb-10`,
      containerClassName,
    )}
  >
    <div
      className={cn(
        `mb-4 flex h-20 w-20 items-center justify-center rounded-full shadow-lg lg:h-24 lg:w-24`,
        iconClassName,
      )}
    >
      {icon}
    </div>
    <div className='grow rounded-lg bg-white p-4 shadow-md lg:text-center'>
      <h3 className='mb-3 text-lg font-bold lg:text-xl'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <section className='relative rounded-2xl bg-gray-100 shadow' id='features'>
      <div className='max-w-8xl mx-auto px-4 py-10 md:py-16'>
        <h2 className='leading-tighter mb-10 text-center text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl'>
          Why Choose <GradientText>Us</GradientText>?
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className='mx-auto flex justify-center pb-4'>
        <p className='text-sm font-light italic'>
          *Insurance Approved for HEDIS Quality Gaps -- digitally integrated
        </p>
      </div>
    </section>
  );
}
