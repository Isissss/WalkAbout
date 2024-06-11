import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { HikingTrail } from "~/lib/types"; // Import the type definition
import { fetchHikingTrails } from "~/lib/queries"; // Import the SQL query function
import PageHeader from "~/components/pageHeader";
import RouteCard from "~/components/routeCard";

export const loader: LoaderFunction = async () => {
  try {
    const hikingTrails = await fetchHikingTrails();
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
              <div className="flex flex-col items-center justify-center gap-y-4">
                  {trails.map((trail, index) => (
                      <RouteCard key={index} {...trail} />
                  ))}
              </div>
          </section>
      </>
  );
}