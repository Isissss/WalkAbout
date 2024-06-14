import { Link } from '@remix-run/react';

export type RouteCardProps = {
  id: number;
  created_at: string;
  difficulty: number | null;
  distance: number | null;
  image: string | null;
  name: string;
  start_location: string;
};

export default function RouteCard({
  id,
  name,
  distance,
  start_location,
  difficulty,
}: RouteCardProps) {
  return (
    <Link
      to={`/routes/${id}`}
      className='grid w-full max-w-4xl grid-cols-4 rounded-3xl border shadow-md shadow-gray-500 text-black no-underline'
    >
      <div className='col-span-1 overflow-hidden'>
        <img
          src='/dummy.png'
          alt=''
          className='h-full w-full rounded-l-3xl object-cover'
        />
      </div>
      <div className='col-span-3 flex flex-col space-y-3 p-5'>
        <h2 className='text-3x col-span-3 text-3xl text-secondary'>{name}</h2>
        <table className='w-full text-left'>
          <tr>
            <th className='  '>Locatie:</th>
            <td>{start_location || ''}</td>
          </tr>
          <tr>
            <th className=' '>Afstand:</th>
            <td>{distance} kilometer</td>
          </tr>
          <tr>
            <th className='fl ex'>Moeilijkheid:</th>
            <td>{difficulty}</td>
          </tr>
        </table>
      </div>
    </Link>
  );
}
