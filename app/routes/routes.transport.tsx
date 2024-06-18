import { useNavigate } from '@remix-run/react';
import PageHeader from '~/components/pageHeader';
import { TRANSPORT_METHODS } from '~/lib/const';

export default function Routes() {
  const navigate = useNavigate();

  const handleCardClick = (method: string) => {
    sessionStorage.setItem('transportMethod', method);

    // redirect to main route page
    navigate('/routes');
  };

  return (
    <>
      <PageHeader title='Wandelroutes' />
      <section> 
        <div className='flex flex-wrap justify-center gap-4'>
          {TRANSPORT_METHODS.map((method) => (
            <div
              key={method.id}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100`}
            >
              <img src={method.icon} alt={method.name} className='h-16 w-16' />
              <span>{method.name}</span>
              <button onClick={() => handleCardClick(method.id)}>Kies</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
