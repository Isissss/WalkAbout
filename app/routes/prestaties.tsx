import clsx from 'clsx';
import PageHeader from '~/components/pageHeader';
import { cn } from '~/lib/utils';
const ACHIEVEMENTS = [
  {
    title: 'Reiziger',
    description: 'U heeft meer dan 15 km afgelegd',
    progress: 50, // example progress percentage
    image: '/traveler.png',
    hotspot: 'top'
  },
  {
    title: 'De verzamelaar',
    description: 'U heeft 10 verschillende routes afgelegd',
    progress: 70, // example progress percentage
    image: '/leaves.png',
    hotspot: 'center'
  },
  {
    title: 'Sociale vlinder',
    description: 'U heeft 3 of meer evenementen van ons bijgewoond',
    progress: 30, // example progress percentage
    image: '/flower.png',
    hotspot: 'top'
  },
  {
    title: 'De pionier',
    description: 'U heeft uw eerste route afgelegd',
    progress: 100, // example progress percentage
    image: '/pioner.png',
    hotspot: 'center'
  },
];

export default function Rewards() {
  return (
    <>
      <PageHeader title='Prestaties' />
      <section>
        <div className='space-y-6'>
          {ACHIEVEMENTS?.map((achievement, index) => (
            <div
              key={index}
              className={clsx(
                'mx-auto grid max-w-4xl md:grid-cols-4 items-center rounded-3xl border bg-white shadow-md',
                achievement.progress === 100
                  ? 'border-none shadow-accent'
                  : 'shadow-gray-500'
              )}
            >
              <div className='relative md:col-span-1 h-32 w-full md:h-full rounded-t-3xl md:rounded-tr-none md:rounded-l-xl'>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className={cn('absolute inset-0 h-full w-full rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none object-cover', { 
                      'object-top': achievement.hotspot === 'top',
                      'object-center': achievement.hotspot === 'center',
                      'object-bottom': achievement.hotspot === 'bottom',
                    })}
                />
              </div>
              <div className='md:col-span-3 mx-3 md:mx-10 p-4'>
                <div className='mb-3'>
                  <h3 className='text-3xl font-semibold text-secondary'>
                    {achievement.title}
                  </h3>
                  <p className='text-xl'>{achievement.description}</p>
                </div>
                <div className='relative pt-1'>
                  <div className='mb-2 flex flex-row items-center'>
                    <div className='mr-4 flex h-3 overflow-hidden rounded border bg-orange-200 text-lg w-3/4 md:w-1/2'>
                      <div
                        style={{ width: `${achievement.progress}%` }}
                        className='flex flex-col justify-center whitespace-nowrap bg-orange-500 text-center text-white shadow-none'
                      ></div>
                    </div>
                    <span className='inline-block rounded-full bg-secondary px-2 py-1 text-sm font-semibold uppercase text-white'>
                      {achievement.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
