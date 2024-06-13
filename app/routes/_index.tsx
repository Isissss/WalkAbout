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
      <PageHeader title='Welkom bij BingGO Walk!' />
      <section className='grid w-full grid-cols-2 gap-6'>
        <div className='mx-auto flex flex-col gap-y-7 sm:w-4/5'>
          <h2 className='mb-3 text-3xl font-bold text-secondary'>
            Wat is BinGO Walk?
          </h2>
          <p className='text-xl'>
            BinGO Walk is een platform waarmee jij verschillende wandelroutes en
            ook diverse sociale activiteiten (evenementen) kan vinden die te
            maken hebben met beweging.
          </p>
          <p className='text-xl'>
            Door het uitvoeren van wandelroutes en het meedoen aan evenementen -
            bijvoorbeeld een gezamenlijke fietstocht of valpreventie cursus, kan
            je punten verzamelen via de Bingo kaart.
          </p>
          <p className='text-xl'>
            De punten die je verzamelt staan ook op de fysieke pas die je
            opgestuurt krijgt, en je kan deze gebruiken voor verschillende
            beloningen.
          </p>
        </div>
        <div>
          <img
            src='/intro.png'
            className='aspect-square overflow-hidden rounded-xl object-cover'
            alt='BinGO Walk'
          />
        </div>
      </section>
    </>
  );
}
