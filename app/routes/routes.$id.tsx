import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { HikingTrail } from '~/lib/types';
import { fetchHikingTrailById } from '~/lib/queries';
import PageHeader from '~/components/pageHeader';

export const loader: LoaderFunction = async ({ params }) => {
  const id = parseInt(params.id || '', 10);
  if (isNaN(id)) {
    throw new Response('Invalid trail ID', { status: 400 });
  }

  try {
    const trail = await fetchHikingTrailById(id);
    return json(trail);
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Response(err.message, { status: 500 });
  }
};

export default function RouteDetail() {
  const trail = useLoaderData<HikingTrail>();
  return (
    <>
      <PageHeader title='Routeinformatie' />
      <section>
        <div className='flex justify-between gap-y-4 max-lg:block'>
          <div>
            <h1 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
              Overzicht
            </h1>
            <div className='flex gap-x-3'>
              <div className='flex flex-col'>
                <p className='font-bold text-primary'>Route naam:</p>
                <p className='font-bold text-primary'>Locatie:</p>
                <p className='font-bold text-primary'>Lengte:</p>
                <p className='font-bold text-primary'>Duur:</p>
                <p className='font-bold text-primary'>Moeilijkheid:</p>
              </div>
              <div className='flex flex-col max-lg:pb-6'>
                <p className=''>{trail.name}</p>
                <p className=''>{trail.start_location}</p>
                <p className=''>{trail.distance} kilometer</p>
                <p className=''>1.5 uur</p>
                <p className=''>★ {trail.difficulty}</p>
              </div>
            </div>
          </div>
          <img
            src='/dummy.png'
            alt=''
            className='h-64 w-96 rounded-3xl object-cover'
          />
        </div>
        <div>
          <h1 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
            Beschrijving
          </h1>
          <p className=''>{trail.description}</p>
        </div>
        <div>
          <h1 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
            Facaliteiten
          </h1>
          <ul className='list-inside list-disc'>
            {trail.facilities.split(',').map((facility, index) => (
              <li key={index} className='py-2'>
                {facility.trim()}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='py-6 text-4xl font-bold text-primary max-md:text-lg'>
            Bereikbaarheid
          </h1>
          <p className=''>{trail.accessibility}</p>
        </div>
      </section>
    </>
  );
}
