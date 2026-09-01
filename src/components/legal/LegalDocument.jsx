import GradientText from '@/components/GradientText';

function LegalList({ items }) {
  return (
    <ul role='list' className='ml-6 space-y-6'>
      {items.map((item) => {
        const row = (
          <>
            <GradientText className='text-xl font-semibold'>
              {item.number}
            </GradientText>
            <span className='w-full'>{item.name}</span>
          </>
        );

        return item.children ? (
          <li key={item.number} className='flex flex-col space-y-6'>
            <div className='flex flex-row items-center gap-x-3'>{row}</div>
            <LegalList items={item.children} />
          </li>
        ) : (
          <li key={item.number} className='flex items-center gap-x-3'>
            {row}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Shared layout for the Privacy Policy, Terms & Conditions and Legal Notice
 * pages: centered gradient heading, optional effective date, intro copy, a
 * numbered (optionally nested) list, and trailing copy passed as children.
 */
export default function LegalDocument({
  title,
  effectiveDate,
  items,
  intro,
  children,
}) {
  return (
    <section>
      <div className='mx-auto px-4 sm:px-6'>
        <div className='space-y-6 pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='mx-auto max-w-3xl text-center' data-animate='fade-up'>
            <h2 className='leading-tighter bg-linear-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl md:text-5xl'>
              {title}
            </h2>
            {effectiveDate && (
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Effective Date: {effectiveDate}
              </p>
            )}
          </div>
          <div
            className='mx-auto max-w-(--breakpoint-xl) space-y-6'
            data-animate='fade-up'
          >
            {intro}
            <LegalList items={items} />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
