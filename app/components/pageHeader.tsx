export default function PageHeader({ title = '' }: { title: string }) {
  return (
    <div className='w-full items-center rounded-3xl border-2 border-foreground'>
      <h1 className='py-6 text-center text-6xl font-bold text-primary'>
        {title}
      </h1>
    </div>
  );
}
