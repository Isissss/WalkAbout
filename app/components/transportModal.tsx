import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import TransportForm from './transportForm';
import { useState } from 'react';

export default function TransportModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root defaultOpen={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/60 data-[state=open]:animate-overlayShow' />
        <Dialog.Content
          onInteractOutside={(e) => e.preventDefault()}
          className='fixed left-[50%] top-[50%] grid max-h-[90vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] place-items-center overflow-y-auto rounded-lg bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow'
        >
          <Dialog.Description>
            <h2 className='mb-5 text-center text-3xl font-bold text-primary'>
              Kies een vervoersmiddel
            </h2>
            <TransportForm onChoiceMade={() => setIsOpen(false)} />
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
