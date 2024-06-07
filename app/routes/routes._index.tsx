import PageHeader from "~/components/pageHeader";
import RouteCard from "~/components/routeCard";

const ROUTES_DUMMY = [
  {
    title: "Natuurpad De Hoge Veluwe",
    location: "Nationaal Park De Hoge Veluwe",
    distance: 3,
    difficulty: 3,
  },
];

export default function Routes() {
  return (
    <>
      <PageHeader title="Wandelroutes" />
      <section>
        <div className="flex flex-col items-center justify-center">
          {ROUTES_DUMMY.map((route, index) => (
            <RouteCard key={index} {...route} />
          ))}
        </div>
      </section>
    </>
  );
}
