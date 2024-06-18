import { ActionFunctionArgs, redirect } from '@remix-run/node';
import PageHeader from '~/components/pageHeader';
import RewardCard from '~/components/rewardCard';
import { VOUCHERS } from '~/lib/const';

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const couponId = body.get('couponId');

  if (!couponId) {
    throw new Error('Invalid coupon ID');
  }

  // artificatial delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // normally this would save the coupon to the user's account
  // but for now we just redirect to the profile page
  return redirect(`/profiel`);
}

export default function Rewards() {
  return (
    <>
      <PageHeader title='Beloningen' />
      <section className='mx-auto max-w-4xl'>
        <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2'>
          {VOUCHERS?.map((voucher, index) => (
            <RewardCard {...voucher} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
