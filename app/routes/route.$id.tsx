import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { HikingTrail } from '~/lib/types';
import { fetchHikingTrailById } from '~/lib/queries';
import dummy from '/dummy.png';

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
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data.name }];
};

export default function RouteDetail() {
  const trail = useLoaderData<HikingTrail>();
  return (
    <>
      <section>
        <div className='relative h-72 w-full'>
          <img src={dummy} alt='' className='h-full w-full object-cover' />
          <div className='absolute bottom-0 left-0 flex h-12 w-fit items-center justify-center rounded-tr-[50px] bg-secondary px-16 py-8 text-4xl font-bold text-white'>
            {trail.name}
          </div>
        </div>
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
