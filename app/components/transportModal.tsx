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
        <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 bg-black/60' />
        <Dialog.Content onInteractOutside={(e) => e.preventDefault()} className='p-5 data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg  bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          <Dialog.Description>
            <h2 className='text-center text-3xl text-primary font-bold mb-5'>Kies een vervoersmiddel</h2>
            <TransportForm onChoiceMade={() => setIsOpen(false)} />
          </Dialog.Description> 
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
