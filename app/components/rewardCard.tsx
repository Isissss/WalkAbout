import { Link } from '@remix-run/react';
import CouponModal from './couponModal';

export default function RewardCard({ id, image, title, points }) {
  return (
    <>
      <div className='relative grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-md shadow-gray-500'>
        <div className='h-full w-full relative rounded-tl-3xl overflow-hidden'>
        <img src={image} alt='' className='absolute inset-0 h-full object-cover w-full' />
        <div className='absolute bottom-0 left-0 flex h-8 w-fit items-center justify-center rounded-tr-3xl bg-secondary px-8 py-5 text-2xl text-white'>
          {points} punten
        </div>
        </div>
        <div className='flex flex-col justify-between p-6'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-3xl font-bold text-primary'>Voucher</h3>
            <p className='text-2xl text-secondary'>{title}</p>
          </div>
          <div className='mt-4 flex justify-between'>
            <CouponModal couponId={id}> 
            <button 
              className='flex items-center text-2xl font-semibold text-orange-500'
            >
              Bekijk <span className='ml-1 text-2xl'>→</span>
            </button>
            </CouponModal>
          </div>
        </div>
      </div>
    </>
  );
}
