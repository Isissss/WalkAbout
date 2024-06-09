import { useLoaderData, Link } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import client from "~/libs/postgres-client";
import PageHeader from "~/components/pageHeader";
import RouteCard from "~/components/routeCard";

type HikingTrail = {
    id: number;
    created_at: string;
    difficulty: number | null;
    distance: number | null;
    image: string | null;
    name: string;
    start_location: string;
};

export const loader: LoaderFunction = async () => {
    try {
        // Select all columns from the hiking_trails table
        const res = await client.query<HikingTrail>(
            'SELECT * FROM hiking_trails'
        );

        const hikingTrails = res.rows;
        console.log("Fetched hiking trails:", hikingTrails);

        return json(hikingTrails);
    } catch (err) {
        console.error("Unexpected error:", err);
        throw new Response("Failed to load hiking trails", { status: 500 });
    }
};


export default function Routes() {
    const trails = useLoaderData<HikingTrail[]>();

    return (
        <>
            <PageHeader title="Wandelroutes" />
            <section>
                <div className="flex flex-col items-center justify-center">
                    {trails.map((trail, index) => (
                        <RouteCard key={index} {...trail} />
                    ))}
                </div>
            </section>
        </>
    );
}
