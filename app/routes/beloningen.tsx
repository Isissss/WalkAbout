import type { MetaFunction } from '@remix-run/node';
import PageHeader from '~/components/pageHeader';
import RewardCard from '~/components/rewardCard';
import { VOUCHERS } from '~/lib/const';

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
