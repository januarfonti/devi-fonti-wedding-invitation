import Image from 'next/image'

function Ending() {
  return (
    <section className='relative flex h-64 flex-col items-center justify-center p-4 text-gray-300 md:h-[500px] md:px-10 md:py-10 lg:h-[800px] lg:px-20 lg:py-16'>
      <Image
        src='/images/ending.jpg'
        alt='Ending'
        className='absolute object-cover object-center'
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw'
        quality={100}
        fill
        priority
      />
      <div className='absolute inset-0 bg-black/60' />
      <div className='z-10 flex w-[70%] flex-col gap-4 text-center text-xs md:text-3xl lg:gap-10 lg:text-4xl lg:font-extralight'>
        <p>
          We hope you&apos;ll join us as we say &quot;I do&quot; and begin our happily ever after.
        </p>
        <p>From ♡ Devi & Fonti</p>
      </div>
    </section>
  )
}

export default Ending
