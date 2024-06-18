import {
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
} from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { HikingTrail } from '~/lib/types'; // Import the type definition
import { fetchHikingTrails } from '~/lib/queries'; // Import the SQL query function
import PageHeader from '~/components/pageHeader';
import RouteCard from '~/components/routeCard';
import { useEffect, useState } from 'react';
import { TRANSPORT_METHODS } from '~/lib/const';
import TransportModal from '~/components/transportModal';
import cookie from 'cookie';
import { transportMethodCookie } from '~/lib/cookies';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const transportMethod = formData.get('transportMethod');

  if (typeof transportMethod !== 'string') {
    throw new Response('Invalid form submission', { status: 400 });
  }

  // Set the cookie with the transport method
  return redirect(`/routes/${transportMethod}`, {
    headers: {
      'Set-Cookie': await transportMethodCookie.serialize(transportMethod),
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');
  const transportMethod = await transportMethodCookie.parse(cookieHeader);

  // Fetch hiking trails
  try {
    const hikingTrails = await fetchHikingTrails();
    return json({ hikingTrails });
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Response('Failed to load hiking trails', { status: 500 });
  }
};

export default function Routes() {
  const { hikingTrails } = useLoaderData<typeof loader>();
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  const label = TRANSPORT_METHODS.find((method) => method.id === id)?.name;

  return (
    <>
      <PageHeader title='Wandelroutes' />
      <section className='mx-auto text-center'>
        <div className='mb-4'>
          <p className='mb-2 text-lg'>
            Deze routes zijn geschikt voor het vervoersmiddel: {label}
          </p>
          <TransportModal>
            <button className='rounded-xl bg-secondary p-2 text-white hover:bg-primary'>
              Wijzig uw vervoersmiddel
            </button>
          </TransportModal>
        </div>
        <div className='flex w-full max-w-4xl flex-col items-center justify-center gap-y-4'>
          {hikingTrails?.map((trail: HikingTrail, index: number) => (
            <RouteCard key={index} {...trail} />
          ))}
        </div>
      </section>
    </>
  );
}
