import { Link } from '@remix-run/react';

export default function RewardCard({ image, description, points }) {
  return (
    <>
      <div className='relative grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-md shadow-gray-500'>
        <div className='absolute bottom-0 left-0 flex h-8 w-24 items-center justify-center rounded-tr-3xl bg-secondary px-2 py-1 text-sm text-white'>
          {points} punten
        </div>
        <img src={image} alt='' className='h-full w-full object-cover' />
        <div className='flex flex-col justify-between p-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold text-primary'>Voucher</h3>
            <p className='text-secondary'>{description}</p>
          </div>
          <div className='mt-4 flex items-end justify-between'>
            <Link
              to='/'
              className='flex items-center text-base font-semibold text-orange-500'
            >
              Bekijk <span className='ml-1 text-base'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
