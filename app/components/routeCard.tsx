import { Link } from "@remix-run/react";

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
      <Link to={`/routes/${id}`} className="block rounded-3xl w-full border-2 border-foreground grid grid-cols-4 no-underline text-black">
        <div className="col-span-1 overflow-hidden">
          <img
              src="/dummy.png"
              alt=""
              className="h-full w-full object-cover rounded-l-3xl"
          />
        </div>
        <div className="col-span-3 p-5 flex flex-col space-y-3">
          <h2 className="text-secondary text-3x col-span-3 text-3xl">{name}</h2>
          <table className="w-full text-left">
            <tr>
              <th className="w-14 flex">Locatie:</th>
              <td>{start_location || ""}</td>
            </tr>
            <tr>
              <th className="w-14 flex">Afstand</th>
              <td>{distance} kilometer</td>
            </tr>
            <tr>
              <th className="w-14 flex">Moeilijkheid</th>
              <td>{difficulty}</td>
            </tr>
          </table>
        </div>
      </Link>
  );
}
