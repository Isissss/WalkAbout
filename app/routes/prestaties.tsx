import clsx from 'clsx';
import PageHeader from '~/components/pageHeader';
const ACHIEVEMENTS = [
  {
    title: 'Reiziger',
    description: 'U heeft meer dan 15 km afgelegd',
    progress: 50, // example progress percentage
    image: '/traveler.png',
  },
  {
    title: 'De verzamelaar',
    description: 'U heeft 10 verschillende routes afgelegd',
    progress: 70, // example progress percentage
    image: '/leaves.png',
  },
  {
    title: 'Sociale vlinder',
    description: 'U heeft 3 of meer evenementen van ons bijgewoond',
    progress: 30, // example progress percentage
    image: '/flower.png',
  },
  {
    title: 'De pionier',
    description: 'U heeft uw eerste route afgelegd',
    progress: 100, // example progress percentage
    image: '/pioner.png',
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
                'mx-auto grid max-w-4xl grid-cols-4 items-center rounded-3xl border bg-white shadow-md',
                achievement.progress === 100
                  ? 'border-none shadow-accent'
                  : 'shadow-gray-500'
              )}
            >
              <div className='col-span-1 h-32 rounded-l-xl bg-orange-500'>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className='h-full w-full rounded-l-xl object-cover'
                />
              </div>
              <div className='col-span-3 mx-10'>
                <h3 className='text-2xl font-semibold text-secondary'>
                  {achievement.title}
                </h3>
                <p>{achievement.description}</p>
                <div className='relative pt-1'>
                  <div className='mb-2 flex flex-row items-center'>
                    <div className='mr-4 flex h-2 overflow-hidden rounded border bg-orange-200 text-xs sm:w-1/2'>
                      <div
                        style={{ width: `${achievement.progress}%` }}
                        className='flex flex-col justify-center whitespace-nowrap bg-orange-500 text-center text-white shadow-none'
                      ></div>
                    </div>
                    <span className='inline-block rounded-full bg-secondary px-2 py-1 text-xs font-semibold uppercase text-white'>
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
