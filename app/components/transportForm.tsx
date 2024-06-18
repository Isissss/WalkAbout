import { Form } from '@remix-run/react';
import { TRANSPORT_METHODS } from '~/lib/const';

export default function TransportForm({
  onChoiceMade,
}: {
  onChoiceMade?: () => void;
}) {
  return (
    <div className='grid justify-center gap-6 md:grid-cols-2 md:gap-12'>
      {TRANSPORT_METHODS.map((method) => (
        <div
          className='relative h-72 overflow-hidden rounded-3xl text-center shadow-md shadow-gray-500'
          key={method.id}
        >
          <img
            src={method.icon}
            alt={method.name}
            className='h-full w-full object-cover'
          />
          <Form
            method='post'
            action='/routes'
            onSubmit={onChoiceMade}
            className='absolute bottom-0 flex h-full w-full items-end'
          >
            <button
              type='submit'
              className='after:contents-[""] w-full bg-[#656ADD8C] bg-opacity-75 py-2 text-2xl font-bold text-white after:absolute after:inset-0 after:h-full after:w-full'
            >
              {method.name}
            </button>
            <input type='hidden' name='transportMethod' value={method.id} />
          </Form>
        </div>
      ))}
    </div>
  );
}
