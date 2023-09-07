import { greetingText } from '@/libs/data'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Greeting({ isOpened }: { isOpened: boolean }) {
  const { q } = useRouter().query
  return (
    <section className='min-h-52 relative z-10 p-4 text-gray-300 md:h-[500px] md:px-10 md:py-10 lg:h-[800px] lg:px-20 lg:py-16'>
      <Image
        src='/images/greeting.jpg'
        alt='Greeting'
        className='absolute -z-20 object-cover object-center brightness-90 contrast-75'
        quality={100}
        fill
        priority
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
      />
      <div className='absolute inset-0 -z-10 bg-black/60' />
      <AnimatePresence>
        {isOpened && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 500 }}
              transition={{ type: 'spring', duration: 2 }}
            >
              <h1 className='text-3xl font-bold tracking-tight md:text-6xl lg:mt-4 lg:text-8xl'>
                Hello,
              </h1>
              {q && (
                <h1 className='text-3xl font-bold tracking-tight md:mt-8 md:text-6xl lg:mt-4 lg:text-8xl'>
                  {q}
                </h1>
              )}
              <div className='mt-4 max-w-[75%] border-t border-gray-400 pb-4 md:mt-8 md:pb-8 lg:mt-12 lg:pb-12' />
            </motion.div>
            <motion.p
              className='text-xs md:text-3xl md:font-extralight lg:max-w-5xl lg:text-4xl'
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ type: 'spring', duration: 2 }}
            >
              {greetingText}
            </motion.p>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Greeting
