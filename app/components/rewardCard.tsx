import { Link } from '@remix-run/react';

export default function RewardCard({ image, description, points }) {
  return (
    <>
      <div className='relative grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-md shadow-gray-500'>
        <div className='absolute bottom-0 left-0 flex h-8 w-fit items-center justify-center rounded-tr-3xl bg-secondary px-8 py-5 text-2xl text-white'>
          {points} punten
        </div>
        <img src={image} alt='' className='h-full w-full object-cover' />
        <div className='flex flex-col justify-between p-6'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-3xl font-bold text-primary'>Voucher</h3>
            <p className='text-2xl text-secondary'>{description}</p>
          </div>
          <div className='mt-4 flex justify-between'>
            <Link
              to='/'
              className='flex items-center text-2xl font-semibold text-orange-500'
            >
              Bekijk <span className='ml-1 text-2xl'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
