import PageHeader from '~/components/pageHeader';
import {json, LoaderFunction} from '@remix-run/node';
import {Link, useLoaderData} from "@remix-run/react";
import {Event} from "~/lib/types";
import {fetchEvents} from '~/lib/queries'; // Import the SQL query function

export const loader: LoaderFunction = async () => {
    try {
        const eventsData = await fetchEvents();
        console.log('Fetched hiking trails:', eventsData);
        return json(eventsData);
    } catch (err) {
        console.error('Unexpected error:', err);
        throw new Response('Failed to load events', {status: 500});
    }
};

const capitalizeFirstLetter = (string:string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = capitalizeFirstLetter(date.toLocaleString('nl-NL', { month: 'long' }));
    const weekday = capitalizeFirstLetter(date.toLocaleString('nl-NL', { weekday: 'long' }));
    return { day, month, weekday };
};

const formatTime = (timeString:string) => {
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
            <PageHeader title='Evenementen'/>
            <section className='flex flex-col items-center justify-center gap-y-4'>
                {eventData.map((event, index) => {
                    const { day, month, weekday } = formatDate(event.date);
                    const formattedTime = formatTime(event.time);
                    return (
                        <Link
                            className='relative flex justify-between w-full max-w-4xl rounded-3xl border text-black no-underline shadow-md shadow-gray-500 lg:grid-cols-4 overflow-hidden'
                            to={`/evenementen/${event.id}`}
                            key={index}
                        >
                            <div className='flex items-center'>
                                <div
                                    className='flex flex-col items-center justify-center p-5 lg:col-span-3 bg-[#656ADD] text-white h-full'
                                    style={{ minWidth: '120px' }} // Set a fixed or minimum width
                                >
                                    <div className='text-6xl max-md:text-4xl'>
                                        {day}
                                    </div>
                                    <div className='text-xl max-md:text-lg'>
                                        {month}
                                    </div>
                                </div>
                            <div className='flex flex-col items-start space-y-3 p-5 lg:col-span-3 max-md:pb-8'>
                                <p className="font-bold text-lg max-md:text-sm">{event.name}</p>
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
                        <div className='max-md:hidden overflow-hidden lg:col-span-1 w-auto h-full max-w-xs'>
                            <div className="relative inline-block w-auto h-full">
                                <img src='/group-activity.jpg' alt='' className="block w-auto h-full"/>
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 bg-[#656ADD] px-6 py-1 text-white rounded-tl-2xl">
                            {'Meld je nu aan ->'}
                        </div>
                    </Link>
                )})}
            </section>
        </>
    );
}
