import { useLoaderData  } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { HikingTrail } from '~/lib/types'; // Import the type definition
import { fetchHikingTrails } from '~/lib/queries'; // Import the SQL query function
import PageHeader from '~/components/pageHeader';
import RouteCard from '~/components/routeCard';
import { useEffect, useState } from 'react';
import { TRANSPORT_METHODS } from '~/lib/const';
import TransportModal from '~/components/couponModal';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transportMethod = url.searchParams.get('transportMethod');

  // normally this would filter for compatible routes
  // but for now we just fetch all routes
  try {
    const hikingTrails = await fetchHikingTrails();
    return json(hikingTrails, {
      // Cache the response for 1 hour
      headers: { 'Cache-Control': 'max-age=3600, public' },
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Response('Failed to load hiking trails', { status: 500 });
  }
}; 

export default function Routes() {
  const hikingTrails = useLoaderData<typeof loader>();
  const [transportMethod, setTransportMethod] = useState<string | null>(null);
  const [isPickingTransportMethod, setIsPickingTransportMethod] =
    useState(false);

  useEffect(() => {
    const transportMethodID = sessionStorage.getItem('transportMethod');

    if (transportMethodID) {
      return setIsPickingTransportMethod(true);
    }

    const label = TRANSPORT_METHODS.find(
      (method) => method.id === transportMethodID
    )?.name;
    setTransportMethod(label || 'Alle vervoersmiddelen');
  }, []);

  return (
    <>
      <PageHeader title='Wandelroutes' />
      <section>
        {transportMethod && isPickingTransportMethod  ? (
          <TransportModal
            transportMethods={TRANSPORT_METHODS}
            setTransportMethod={setTransportMethod}
            setIsPickingTransportMethod={setIsPickingTransportMethod}
          />
        ) : ( 
        <>
          <p className='mb-2 text-center text-2xl'>
            Routes geschikt voor {transportMethod}
          </p>
          <div className='flex flex-col items-center justify-center gap-y-4'>
            {hikingTrails?.map((trail: HikingTrail, index: number) => (
              <RouteCard key={index} {...trail} />
            ))}
          </div>
        </>)}
      </section>
    
    </>
  );
}
