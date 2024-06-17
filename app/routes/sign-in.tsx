import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import type { ActionFunctionArgs } from '@remix-run/node';

import { createSupabaseServerClient } from '~/supabase.server';
import PageHeader from '~/components/pageHeader';

export const action = async ({ request }: ActionFunctionArgs) => {
  const { supabaseClient, headers } = createSupabaseServerClient(request);

  const formData = await request.formData();

  const { error } = await supabaseClient.auth.signInWithOtp({
    email: formData.get('email') as string,
    options: {
      emailRedirectTo: 'http://localhost:5173/auth/callback',
    },
  });

  // just for this example
  // if there is no error, we show "Please check you email" message
  if (error) {
    return json({ success: false }, { headers });
  }

  return json({ success: true }, { headers });
};

const SignIn = () => {
  const actionResponse = useActionData<typeof action>();

  return (
    <>
      <PageHeader title='Inloggen' />
      <div className='flex flex-col items-center justify-center p-6'>
        {!actionResponse?.success ? (
          <Form
            method='post'
            className='w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md'
          >
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Uw Email-adres
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Uw Email-adres'
                required
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full rounded-md bg-[#656ADD] px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Inloggen
              </button>
            </div>
          </Form>
        ) : (
          <h3 className='text-center text-lg font-medium text-green-600'>
            Gebruik de link in uw mail voor het inloggen
          </h3>
        )}
      </div>
    </>
  );
};

export default SignIn;
