import { AnimatePresence } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

function Venue({ isOpened }: { isOpened: boolean }) {
  return (
    <section className='relative z-10 flex flex-col gap-6 px-4 pt-28 pb-10 text-gray-300 md:px-10 md:py-10 lg:px-20 lg:py-16'>
      <h1 className='custom-text-stroke absolute top-4 right-5 -z-0 text-right text-5xl font-bold text-gray-300 lg:text-[100px]'>
        WEDDING
        <br />
        EVENT
      </h1>
      <Image
        src='/images/venue-section.jpg'
        alt='Venue'
        className='absolute -z-20 object-cover object-bottom'
        sizes={
          '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw'
        }
        quality={100}
        fill
        priority
      />
      <div className='absolute inset-0 -z-10 bg-[#171A0D]/90' />
      <AnimatePresence>
        {isOpened && (
          <>
            <h1 className='text-3xl font-bold tracking-tight md:text-6xl lg:mt-4 lg:text-8xl'>
              SUNDAY, <br />
              30 APRIL 2024
            </h1>

            <div className='flex flex-col'>
              <span className='text-lg font-bold md:text-3xl lg:text-4xl'>WEDDING CEREMONY</span>
              <span className='text-2xl font-extralight md:text-3xl lg:text-4xl'>3 PM - 4 PM</span>
            </div>

            <div className='flex flex-col'>
              <span className='text-lg font-bold md:text-3xl lg:text-4xl'>WEDDING RECEPTION</span>
              <span className='text-2xl font-extralight md:text-3xl lg:text-4xl'>6 PM - 9 PM</span>
            </div>

            <div className='flex flex-col'>
              <span className='text-lg font-bold md:text-3xl lg:text-4xl'>LOCATION</span>
              <span className='text-lg font-light md:text-3xl lg:text-4xl'>
                PERMATA JINGGA SWIMMING POOL
              </span>
              <span className='text-sm font-light md:text-2xl lg:text-3xl'>
                JL Permata Jingga I, Tunggulwulung, Lowokwaru Malang - Jawa Timur
              </span>
            </div>

            <div className='flex gap-4'>
              <a href='https://goo.gl/maps/vQkdjn9XxBe6j3VJA' target='_blank' rel='noreferrer'>
                <button className='inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-2 py-1 text-xs uppercase text-gray-300 lg:px-4 lg:py-2 lg:text-lg'>
                  <MapPin className='inline-block h-4' />
                  Google Maps
                </button>
              </a>

              <a href='/devi-fonti-wedding-event.ics' target='_blank' rel='noreferrer'>
                <button className='inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-2 py-1 text-xs uppercase text-gray-300 lg:px-4 lg:py-2 lg:text-lg'>
                  <Calendar className='inline-block h-4' />
                  Save The Date
                </button>
              </a>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Venue
