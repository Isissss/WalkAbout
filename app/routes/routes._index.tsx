import { Form, json, redirect, useLoaderData, useNavigate } from '@remix-run/react';
import PageHeader from '~/components/pageHeader';
import TransportForm from '~/components/transportForm';
import { TRANSPORT_METHODS } from '~/lib/const'; 
import { transportMethodCookie } from '~/lib/cookies';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const transportMethod = formData.get('transportMethod'); 

  if (typeof transportMethod !== 'string') {
   return }

  // Set the cookie with the transport method and redirect
  return redirect(`/routes/${transportMethod}`, {
    headers: {
      'Set-Cookie': await transportMethodCookie.serialize(transportMethod),
    },
  });
};

export const loader = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await transportMethodCookie.parse(cookieHeader) 

  if (cookie) {
    return redirect(`/routes/${cookie}`);
  }
};

export default function Routes() { 

  return (
    <>
      <PageHeader title='Hoe gaat u bewegen?' />
      <section> 
        <div className='flex flex-wrap justify-center gap-4'>
           <TransportForm />
        </div>
      </section>
    </>
  );
}
