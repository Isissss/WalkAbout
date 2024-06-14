import type { MetaFunction } from '@remix-run/node';
import PageHeader from '~/components/pageHeader';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <>
      <PageHeader title='Bingo' />
      <section className='grid w-full grid-cols-4 gap-6 mx-auto'>
        <div className='col-span-2 mx-auto flex flex-col gap-y-7'>
          <h2 className='mb-3 text-3xl font-bold text-secondary'>
            Hoe werkt het?
          </h2>
          <p className='text-xl'>
            Hiernaast zie je de bingo kaart die je nodig hebt bij het verzamelen
            van stempels voor beloningen. Bij elk cijfer hoort een wandelroute.
            Na het lopen van je route kan je die afstempelen .
          </p>
        </div>
        <div className='col-span-2 flex items-center mx-auto'>
          <img
            src='/bingo.png'
            className='aspect-square overflow-hidden rounded-xl object-cover'
            alt='BinGO Walk'
          />
        </div>
      </section>
    </>
  );
}
