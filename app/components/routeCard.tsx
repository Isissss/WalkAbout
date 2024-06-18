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
    <div className='relative grid w-full max-w-4xl rounded-3xl border text-black no-underline shadow-md shadow-gray-500 lg:grid-cols-4'>
      <div className='overflow-hidden lg:col-span-1'>
        <img
          src='/dummy.png'
          alt=''
          className='h-32 w-full rounded-t-3xl object-cover lg:h-full lg:rounded-l-3xl'
        />
      </div>
      <div className='flex flex-col items-start space-y-3 p-5 lg:col-span-3'>
        <Link
          className='after:absolute after:inset-0 after:h-full after:w-full'
          to={`/route/${id}`}
        >
          <h2 className='text-3x col-span-3 text-3xl text-secondary'>{name}</h2>{' '}
        </Link>
        <table className='text-left'>
          <tbody>
            <tr>
              <th className='w-32'>Locatie:</th>
              <td>{start_location || ''}</td>
            </tr>
            <tr>
              <th>Afstand:</th>
              <td>{distance} kilometer</td>
            </tr>
            <tr>
              <th>Moeilijkheid:</th>
              <td>★ {difficulty}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
