import * as Dialog from '@radix-ui/react-dialog';
import { VOUCHERS } from '~/lib/const';
import { X } from 'lucide-react';
import { cn } from '~/lib/utils';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';
export default function CouponModal({
  couponId,
  children,
}: {
  couponId: number;
  children: React.ReactNode;
}) {
  const coupon = VOUCHERS.find((voucher) => voucher.id === couponId);
  const [isExploding, setIsExploding] = useState(false);

  if (!coupon) return null;

  return (
    <Dialog.Root defaultOpen={false}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 bg-black/60' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border-4 border-accent bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          <Dialog.Description>
            <div className='relative h-52 w-full'>
              <img
                className={cn('h-full w-full object-cover', {
                  'object-top': coupon.hotspot === 'top',
                  'object-center': coupon.hotspot === 'center',
                  'object-bottom': coupon.hotspot === 'bottom',
                })}
                alt=''
                src={coupon.image}
              />
              <div className='absolute bottom-0 left-0 rounded-tr-3xl bg-secondary px-10 py-3 text-lg text-white'>
                {coupon.points} Punten
              </div>
            </div>
            <div className='flex flex-col justify-between p-6'>
              <h3 className='text-3xl font-bold text-primary'>Voucher</h3>
              <p className='mb-4 text-secondary'>{coupon.title}</p>
              <p className='mb-3'>{coupon.description}</p>
              <p className='mt-4 text-xl font-bold text-primary'>
                Te gebruiken op de volgende locaties:
              </p>
              <ul className='mb-3 flex list-none flex-row flex-wrap'>
                {coupon.vendors.map((location, idx) => (
                  <li key={location} className='italic'>
                    {location}{' '}
                    {idx < coupon.vendors.length - 1 && (
                      <span className='mx-1'>•</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className='relative flex w-full flex-col items-center justify-center'>
                <button
                  onClick={() => setIsExploding(!isExploding)}
                  className='mt-4 w-52 rounded-xl bg-[#656ADD] px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Koop coupon
                </button>
                {isExploding && (
                  <ConfettiExplosion
                    force={0.4}
                    duration={2200}
                    particleCount={30}
                    width={1000}
                    className='absolute'
                    onComplete={() => setIsExploding(false)}
                  />
                )}
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className='absolute right-0 top-0 rounded-bl-lg bg-accent py-3 pl-4 pr-3'>
              <X className='h-6 w-6 text-white' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
