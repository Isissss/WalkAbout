import PageHeader from '~/components/pageHeader'; 

export default function Index() {
  return (
    <>
      <PageHeader title='Welkom bij WalkAbout!' isMain />
      <section className='grid w-full gap-6 lg:grid-cols-2'>
        <div className='mx-auto flex flex-col gap-y-7 sm:w-4/5'>
          <h2 className='mb-3 text-3xl font-bold text-secondary'>
            Wat is WalkAbout? 
          </h2>
          <p className='text-xl'>
            WalkAbout is een platform waarmee jij verschillende wandelroutes en
            ook diverse sociale activiteiten (evenementen) kan vinden die te
            maken hebben met beweging.
          </p>
          <p className='text-xl'>
            Door het uitvoeren van wandelroutes en het meedoen aan evenementen -
            bijvoorbeeld een gezamenlijke fietstocht of valpreventie cursus, kan
            je punten verzamelen via de Bingo kaart.
          </p>
          <p className='text-xl'>
            De punten die je verzamelt staan ook op de fysieke pas die je
            opgestuurt krijgt, en je kan deze gebruiken voor verschillende
            beloningen.
          </p>
          <p className='text-xl'>
            Veel loopplezier! Team WalkAbout
          </p>
        </div>
        <div className='mx-auto'>
          <img
            src='/intro.png'
            className='aspect-square overflow-hidden rounded-xl object-cover'
            alt=''
          />
        </div>
      </section>
    </>
  );
}
