import { Link } from '@remix-run/react';
import CouponModal from './couponModal';
import { cn } from '~/lib/utils';

export default function RewardCard({ id, image, title, points, hotspot }) {
  return (
    <>
      <div className='relative grid overflow-hidden rounded-3xl bg-white shadow-md shadow-gray-500 lg:grid-cols-2'>
        <div className='relative h-48 w-full overflow-hidden rounded-tl-3xl sm:h-full'>
          <img
            src={image}
            alt=''
            className={cn('absolute inset-0 h-full w-full object-cover', {
              'object-top': hotspot === 'top',
              'object-center': hotspot === 'center',
              'object-bottom': hotspot === 'bottom',
            })}
          />
          <div className='absolute bottom-0 left-0 flex h-8 w-fit items-center justify-center rounded-tr-3xl bg-secondary px-8 py-5 text-2xl text-white'>
            {points} punten
          </div>
        </div>
        <div className='flex flex-col justify-between p-6'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl font-bold text-primary lg:text-3xl'>
              Voucher
            </h3>
            <p className='mb-5 text-lg text-secondary lg:line-clamp-3 lg:min-h-[6rem] lg:text-2xl'>
              {title}
            </p>
          </div>
          <div className='mt-4 flex justify-between'>
            <CouponModal couponId={id}>
              <button className='flex items-center text-xl font-semibold text-orange-500 lg:text-2xl'>
                Bekijk <span className='ml-1 text-xl lg:text-2xl'>→</span>
              </button>
            </CouponModal>
          </div>
        </div>
      </div>
    </>
  );
}
