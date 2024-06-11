import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { HikingTrail } from "~/lib/types";
import { fetchHikingTrailById } from "~/lib/queries";
import PageHeader from "~/components/pageHeader";
import RouteCard from "~/components/routeCard";

export const loader: LoaderFunction = async ({ params }) => {
  const id = parseInt(params.id || '', 10);
  if (isNaN(id)) {
    throw new Response("Invalid trail ID", { status: 400 });
  }

  try {
    const trail = await fetchHikingTrailById(id);
    return json(trail);
  } catch (err) {
    console.error("Unexpected error:", err);
    throw new Response(err.message, { status: 500 });
  }
};

export default function RouteDetail() {
  const trail = useLoaderData<HikingTrail>();
  return (
      <>
        <PageHeader title="Routeinformatie" />
        <section>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p>{trail.name}</p>
            <p>{trail.start_location}</p>
            <p>{trail.distance} kilometers</p>
            <p>Difficulty: {trail.difficulty}</p>
          </div>
        </section>
      </>
  );
}
