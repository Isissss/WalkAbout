export default function PageHeader({ title = '' }: { title: string }) {
  return (
    <div className='w-full items-center rounded-3xl'>
      <h1 className='py-6 text-center text-6xl max-md:text-4xl font-bold text-primary'>
        {title}
      </h1>
    </div>
  );
}
