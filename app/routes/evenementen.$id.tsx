import {useLoaderData} from "@remix-run/react";
import {json, LoaderFunction} from "@remix-run/node";
import {Event} from "~/lib/types";
import {fetchEventById} from "~/lib/queries";
import PageHeader from "~/components/pageHeader";

export const loader: LoaderFunction = async ({params}) => {
    const id = parseInt(params.id || '', 10);
    if (isNaN(id)) {
        throw new Response("Invalid trail ID", {status: 400});
    }

    try {
        const event = await fetchEventById(id);
        return json(event);
    } catch (err) {
        console.error("Unexpected error:", err);
        throw new Response(err.message, {status: 500});
    }
};

export default function EventDetail() {
    const event = useLoaderData<Event>();
    return (
        <>
            <PageHeader title="Evenement informatie"/>
            <section>
                <div className="flex gap-y-4 justify-between">
                    <div>
                        <h1 className='py-6 text-4xl font-bold text-primary'>{event.name}</h1>
                        <p>{event.description}</p>
                        <button
                            type="submit"
                            className="w-1/5 mt-4 bg-[#656ADD] text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Meld mij aan
                        </button>
                        <h1 className='py-6 text-4xl font-bold text-primary'>Locatie</h1>
                        <div className="flex gap-x-3">
                            <div className="flex flex-col">
                                <p className="font-bold text-primary">Startpunt:</p>
                                <p className="font-bold text-primary">Eindpunt:</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="">{event.start_location}</p>
                                <p className="">{event.start_location}</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/group-activity.jpg"
                        alt=""
                        className="h-64 w-96 object-cover rounded-3xl"
                    />
                </div>
                <div>
                    <h1 className='py-6 text-4xl font-bold text-primary'>Beschrijving</h1>
                    <p className="">De wandeling zal in totaal 1.5 kilometer zijn over één uur, met een pauze halverwege
                        de wandeling inbegrepen. Het Rotterdamse Zuiderpark is een rustgevende en groene omgeving. De
                        paden waar we op wandelen zijn plat en vriendelijk voor wandelstokken en andere
                        loophulpmiddelen.</p>
                </div>
                <div>
                    <h1 className='py-6 text-4xl font-bold text-primary'>Facaliteiten</h1>
                    <ul className="list-disc list-inside">
                        <li key={1} className="py-2">Parkeerplaats bij de Brasserie</li>
                        <li key={2} className="py-2">Toilet faciliteiten tijdens de pauze</li>
                        <li key={3} className="py-2">Kunstwerken (standbeelden)</li>
                        <li key={4} className="py-2">Picknick plaatsen</li>
                        <li key={5} className="py-2">Bankjes om te zitten</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
