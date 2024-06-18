export default function PageHeader({
  title = '',
  isMain = false,
}: {
  title: string;
  isMain?: boolean;
}) {
  return (
    <div className='w-full items-center rounded-3xl'>
      <h1 className='py-6 text-center text-6xl font-bold text-primary max-md:text-4xl'>
        {title}{' '}
        {isMain ? (
          <img
            src='/WalkaboutLogo.jpg'
            alt=''
            className='inline-flex h-32 w-32 object-cover'
          />
        ) : null}
      </h1>
    </div>
  );
}
