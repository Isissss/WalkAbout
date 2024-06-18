import PageHeader from '~/components/pageHeader';
import { json, LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { Event } from '~/lib/types';
import { fetchEvents } from '~/lib/queries'; // Import the SQL query function

export const loader: LoaderFunction = async () => {
  try {
    const eventsData = await fetchEvents();
    return json(eventsData);
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Response('Failed to load events', { status: 500 });
  }
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = capitalizeFirstLetter(
    date.toLocaleString('nl-NL', { month: 'long' })
  );
  const weekday = capitalizeFirstLetter(
    date.toLocaleString('nl-NL', { weekday: 'long' })
  );
  return { day, month, weekday };
};

const formatTime = (timeString: string) => {
  // Split the timeString to separate time and timezone offset
  const [timePart] = timeString.split('+');

  // Extract hours and minutes from the timePart
  const [hour, minute] = timePart.split(':');

  // Return formatted time as HH:mm
  return `${hour}:${minute}`;
};

export default function events() {
  const eventData = useLoaderData<Event[]>();
  return (
    <>
      <PageHeader title='Evenementen' />
      <section className='flex flex-col items-center justify-center gap-y-4'>
        {eventData.map((event, index) => {
          const { day, month, weekday } = formatDate(event.date);
          const formattedTime = formatTime(event.time);
          return (
            <Link
              className='relative flex w-full max-w-4xl justify-between overflow-hidden rounded-3xl border text-black no-underline shadow-md shadow-gray-500 lg:grid-cols-4'
              to={`/evenementen/${event.id}`}
              key={index}
            >
              <div className='flex items-center'>
                <div
                  className='flex h-full flex-col items-center justify-center bg-[#656ADD] p-5 text-white lg:col-span-3'
                  style={{ minWidth: '120px' }} // Set a fixed or minimum width
                >
                  <div className='text-6xl max-md:text-4xl'>{day}</div>
                  <div className='text-xl max-md:text-lg'>{month}</div>
                </div>
                <div className='flex flex-col items-start space-y-3 p-5 max-md:pb-8 lg:col-span-3'>
                  <p className='text-lg font-bold max-md:text-sm'>
                    {event.name}
                  </p>
                  <table className='text-left text-lg max-md:text-sm'>
                    <tbody>
                      <tr>
                        <th>Dag:</th>
                        <td>{weekday}</td>
                      </tr>
                      <tr>
                        <th>Locatie:</th>
                        <td>{event.start_location}</td>
                      </tr>
                      <tr>
                        <th>Tijd:</th>
                        <td>{formattedTime}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='h-full w-auto max-w-xs overflow-hidden max-md:hidden lg:col-span-1'>
                <div className='relative inline-block h-full w-auto'>
                  <img
                    src={event.image}
                    alt=''
                    className='block h-full w-auto'
                  />
                  <div className='pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white to-transparent'></div>
                </div>
              </div>
              <div className='absolute bottom-0 right-0 rounded-tl-2xl bg-[#656ADD] px-6 py-1 text-white'>
                {'Meld je nu aan ->'}
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
