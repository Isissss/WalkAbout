import { redirect } from '@remix-run/node';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { createSupabaseServerClient } from '~/supabase.server';
import PageHeader from '~/components/pageHeader';
import dummy from '/dummy.png';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabaseClient } = createSupabaseServerClient(request);
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (!user) {
    return redirect('/sign-in');
  }

  return new Response(null);
};

const Profiel = () => {
  return (
    <>
      <PageHeader title='Account' />
      <div className='flex w-full gap-2'>
        <div className='flex w-1/2 flex-col gap-2'>
          <div className='flex justify-between rounded-3xl border-2 border-foreground p-2 text-black no-underline'>
            <div className='text-2xl font-bold'>
              Jolanda
              <div className='text-xl font-normal'>
                65 jaar oud
                <br />
                Zuid-Holland
              </div>
            </div>
            <img
              src='/women.png'
              alt=''
              className='h-52 w-72 rounded-3xl object-cover'
            />
          </div>
          <div className='flex justify-center rounded-3xl border-2 border-foreground p-2 text-center text-black no-underline'>
            <div className='text-2xl font-bold'>
              Punten
              <div className='text-xl font-normal'>160 punten gespaard</div>
            </div>
          </div>
          <div className='flex justify-center rounded-3xl border-2 border-foreground p-2 text-center text-black no-underline'>
            <div className='text-2xl font-bold'>
              Recente wandelroutes
              <a
                className='block grid w-full grid-cols-4 rounded-3xl border-2 border-foreground text-black no-underline'
                href='/routes/21'
              >
                <div className='col-span-1 overflow-hidden'>
                  <img
                    src={dummy}
                    alt=''
                    className='h-full w-full rounded-l-3xl object-cover'
                  />
                </div>
                <div className='col-span-3 flex flex-col space-y-3 p-5'>
                  <h2 className='text-3x col-span-3 text-3xl text-secondary'>
                    Regio Blaak
                  </h2>
                  <table className='w-full text-left'>
                    <tr>
                      <th className='flex w-10'>Afstand:</th>
                      <td>4 kilometer</td>
                    </tr>
                    <tr>
                      <th className='flex w-10'>Moeilijkheid:</th>
                      <td>2</td>
                    </tr>
                  </table>
                </div>
              </a>
              <a
                className='mt-2 block grid w-full grid-cols-4 rounded-3xl border-2 border-foreground text-black no-underline'
                href='/routes/21'
              >
                <div className='col-span-1 overflow-hidden'>
                  <img
                    src={dummy}
                    alt=''
                    className='h-full w-full rounded-l-3xl object-cover'
                  />
                </div>
                <div className='col-span-3 flex flex-col space-y-3 p-5'>
                  <h2 className='text-3x col-span-3 text-3xl text-secondary'>
                    Regio Blaak
                  </h2>
                  <table className='w-full text-left'>
                    <tr>
                      <th className='flex w-10'>Afstand:</th>
                      <td>4 kilometer</td>
                    </tr>
                    <tr>
                      <th className='flex w-10'>Moeilijkheid:</th>
                      <td>2</td>
                    </tr>
                  </table>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='flex w-1/2 justify-center rounded-3xl border-2 border-foreground p-2 text-center text-black no-underline'>
          <div className='w-full text-2xl font-bold'>
            Vouchers
            <div className='text-xl font-normal'>
              <div className='flex gap-3 rounded-3xl border-2 border-foreground p-2 text-black no-underline'>
                <img
                  src='/coffee.jpg'
                  alt=''
                  className='h-52 w-72 rounded-3xl object-cover'
                />
                <div className='text-left text-2xl font-bold'>
                  Voucher
                  <div className='text-xl font-normal'>
                    50% korting op een warme drank (Koffie, thee)
                  </div>
                </div>
              </div>
            </div>
            <div className='text-xl font-normal'>
              <div className='mt-2 flex gap-3 rounded-3xl border-2 border-foreground p-2 text-black no-underline'>
                <img
                  src='/coffee.jpg'
                  alt=''
                  className='h-52 w-72 rounded-3xl object-cover'
                />
                <div className='text-left text-2xl font-bold'>
                  Voucher
                  <div className='text-xl font-normal'>
                    50% korting op een warme drank (Koffie, thee)
                  </div>
                </div>
              </div>
            </div>
            <div className='text-xl font-normal'>
              <div className='mt-2 flex gap-3 rounded-3xl border-2 border-foreground p-2 text-black no-underline'>
                <img
                  src='/coffee.jpg'
                  alt=''
                  className='h-52 w-72 rounded-3xl object-cover'
                />
                <div className='text-left text-2xl font-bold'>
                  Voucher
                  <div className='text-xl font-normal'>
                    50% korting op een warme drank (Koffie, thee)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='w-24 rounded-3xl border-2 border-foreground bg-orange-500 p-2 text-center text-2xl font-bold text-black no-underline'>
        <Form action='/sign-out' method='post'>
          <button type='submit'>Uitloggen</button>
        </Form>
      </section>
    </>
  );
};

export default Profiel;
