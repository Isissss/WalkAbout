import type { MetaFunction } from '@remix-run/node';
import PageHeader from '~/components/pageHeader';
import RewardCard from '~/components/rewardCard';

const VOUCHERS = [
  {
    image: '/coffee.png',
    title: 'Voucher',
    description: '50% korting warme drank\n(Koffie, thee)',
    points: 10,
  },
  {
    image: '/cake.png',
    title: 'Voucher',
    description: '1+1 gratis stuk gebak',
    points: 25,
  },
  {
    image: '/sportles.png',
    title: 'Voucher',
    description: '30% korting sportles',
    points: 40,
  },
  {
    image: '/coffee.png',
    title: 'Voucher',
    description: '50% korting warme drank\n(Koffie, thee)',
    points: 10,
  },
  {
    image: '/cake.png',
    title: 'Voucher',
    description: '1+1 gratis stuk gebak',
    points: 25,
  },
  {
    image: '/sportles.png',
    title: 'Voucher',
    description: '30% korting sportles',
    points: 40,
  },
];

export const meta: MetaFunction = () => {
  return [{ title: 'Walkabout' }];
};

export default function Rewards() {
  return (
    <>
      <PageHeader title='Beloningen' />
      <section className='mx-auto max-w-4xl'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {VOUCHERS?.map((voucher, index) => (
            <RewardCard
              key={index}
              image={voucher.image}
              title={voucher.title}
              description={voucher.description}
              points={voucher.points}
            />
          ))}
        </div>
      </section>
    </>
  );
}
