import {
  brideFirstName,
  brideInstagram,
  brideLastName,
  groomFirstName,
  groomInstagram,
  groomLastName,
} from '@/libs/data'
import { AnimatePresence, motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

function GroomAndBride({ isOpened }: { isOpened: boolean }) {
  return (
    <section className='relative z-10 flex h-56 flex-col justify-end p-4 text-gray-300 md:h-[500px] md:px-10 md:py-10 lg:h-[800px] lg:px-20 lg:py-16'>
      <Image
        src='/images/bride-and-groom.jpg'
        alt='Bride and Groom'
        className='absolute -z-20 object-cover object-bottom lg:object-center'
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw'
        quality={100}
        fill
        priority
      />
      <AnimatePresence>
        {isOpened && (
          <>
            <div className='grid grid-cols-2'>
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: 500 }}
                transition={{ type: 'spring', duration: 2 }}
              >
                <p className='text-xs md:text-3xl lg:text-4xl'>The Groom</p>
                <div className='mt-1 max-w-[50%] border-t border-gray-400 pb-1 md:mt-2 md:pb-2' />
                <h1 className='text-2xl font-bold uppercase leading-6 tracking-tight md:text-6xl lg:mt-4 lg:text-8xl'>
                  {groomFirstName} <br /> {groomLastName}
                </h1>

                <a
                  href={'https://www.instagram.com/' + groomInstagram}
                  target='_blank'
                  className='mt-1 flex items-center text-[8px] md:text-3xl md:font-extralight lg:max-w-5xl lg:text-4xl'
                  rel='noreferrer'
                >
                  <Instagram className='mr-1 inline-block h-[8px] w-[8px] md:mr-3 md:h-8 md:w-8' />
                  {groomInstagram}
                </a>
              </motion.div>

              <motion.div
                className='text-right'
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ type: 'spring', duration: 2 }}
              >
                <p className='text-xs md:text-3xl lg:text-4xl'>The Bride</p>
                <div className='mt-1 ml-auto max-w-[50%] border-t border-gray-400 pb-1 md:mt-2 md:pb-2' />
                <h1 className='text-2xl font-bold uppercase leading-6 tracking-tight shadow-lg md:text-6xl lg:mt-4 lg:text-8xl'>
                  {brideFirstName} <br /> {brideLastName}
                </h1>

                <a
                  href={'https://www.instagram.com/' + brideInstagram}
                  target='_blank'
                  className='mt-1 text-[8px] md:text-3xl md:font-extralight lg:max-w-5xl lg:text-4xl'
                  rel='noreferrer'
                >
                  <Instagram className='mr-1 inline-block h-[8px] w-[8px] md:mr-3 md:h-8 md:w-8' />
                  {brideInstagram}
                </a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GroomAndBride
