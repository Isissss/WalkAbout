export type RouteCardProps = {
  title: string;
  distance: number;
  location: string;
  difficulty: number;
};

export default function RouteCard({
  title,
  distance,
  location,
  difficulty,
}: RouteCardProps) {
  return (
    <div className="rounded-3xl w-full border-2 border-foreground grid grid-cols-4">
      <div className="col-span-1 overflow-hidden">
        <img
          src="/dummy.png"
          alt=""
          className="h-full w-full object-cover rounded-l-3xl"
        />
      </div>
      <div className="col-span-3 p-5 flex flex-col space-y-3">
        <h2 className="text-secondary text-3x col-span-3 text-3xl">{title}</h2>
        <table className="w-full text-left">
          <tr>
            <th className="w-14 flex">Locatie:</th>
            <td>{location || ""}</td>
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
    </div>
  );
}
