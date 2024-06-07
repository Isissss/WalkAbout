export default function PageHeader({ title = "" }: { title: string }) {
  return (
    <div className="rounded-3xl w-full items-center border-2 border-foreground">
      <h1 className="font-bold text-primary text-6xl text-center py-6">
        {title}
      </h1>
    </div>
  );
}
