import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { Event } from '~/lib/types';
import { fetchEventById } from '~/lib/queries';
import PageHeader from '~/components/pageHeader';

export const loader: LoaderFunction = async ({ params }) => {
  const id = parseInt(params.id || '', 10);
  if (isNaN(id)) {
    throw new Response('Invalid trail ID', { status: 400 });
  }

  try {
    const event = await fetchEventById(id);
    return json(event);
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Response(err.message, { status: 500 });
  }
};

export default function EventDetail() {
  const event = useLoaderData<Event>();
  return (
    <>
      <PageHeader title='Evenement informatie' />
      <section>
        <div className='flex justify-between gap-4 max-lg:block'>
          <div>
            <h2 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
              {event.name}
            </h2>
            <p>{event.description}</p>
            <button
              type='submit'
              className='mt-4 w-52 rounded-xl bg-[#656ADD] px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Meld mij aan
            </button>
            <h2 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
              Locatie
            </h2>
            <div className='flex gap-x-3'>
              <div className='flex flex-col'>
                <p className='font-bold text-primary'>Startpunt:</p>
                <p className='font-bold text-primary'>Eindpunt:</p>
              </div>
              <div className='flex flex-col max-lg:pb-6'>
                <p className=''>{event.start_location}</p>
                <p className=''>{event.start_location}</p>
              </div>
            </div>
          </div>
          <img
            src='/group-activity.jpg'
            alt=''
            className='h-64 w-96 rounded-3xl object-cover'
          />
        </div>
        <div>
          <h2 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
            Beschrijving
          </h2>
          <p className=''>
            De wandeling zal in totaal 1.5 kilometer zijn over één uur, met een
            pauze halverwege de wandeling inbegrepen. Het Rotterdamse Zuiderpark
            is een rustgevende en groene omgeving. De paden waar we op wandelen
            zijn plat en vriendelijk voor wandelstokken en andere
            loophulpmiddelen.
          </p>
        </div>
        <div>
          <h2 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
            Facaliteiten
          </h2>
          <ul className='list-inside list-disc'>
            <li key={1} className='py-2'>
              Parkeerplaats bij de Brasserie
            </li>
            <li key={2} className='py-2'>
              Toilet faciliteiten tijdens de pauze
            </li>
            <li key={3} className='py-2'>
              Kunstwerken (standbeelden)
            </li>
            <li key={4} className='py-2'>
              Picknick plaatsen
            </li>
            <li key={5} className='py-2'>
              Bankjes om te zitten
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
