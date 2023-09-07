import { brideNickname, groomNickname } from '@/libs/data'
import { motion } from 'framer-motion'
import { MailOpen } from 'lucide-react'
import Image from 'next/image'

interface Props {
  onButtonClick: () => void
}

function Intro({ onButtonClick }: Props) {
  return (
    <section className='relative z-50 flex h-screen flex-col items-center overflow-hidden text-gray-300'>
      <Image
        src='/images/intro-2-mobile.jpg?'
        alt='Intro'
        className='absolute -z-10 object-cover object-bottom lg:hidden'
        quality={100}
        fill
        priority
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
      />
      <Image
        src='/images/intro-2.jpg'
        alt='Intro'
        className='absolute -z-10 hidden object-cover object-center lg:block'
        quality={100}
        fill
        priority
        sizes='100vw'
      />
      <div className='mt-28 text-center'>
        <motion.p
          className='text-lg font-light uppercase lg:text-4xl'
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ delay: 0.5, type: 'spring', duration: 2 }}
        >
          The Wedding Of
        </motion.p>
        <motion.h1
          className='text-stroke text-5xl font-bold uppercase lg:mt-4 lg:text-8xl lg:tracking-wider'
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={{ delay: 0.5, type: 'spring', duration: 2 }}
        >
          {brideNickname} & {groomNickname}
        </motion.h1>
      </div>
      <motion.button
        onClick={onButtonClick}
        className='mt-[15%] flex items-center gap-2 rounded-lg border-2 border-gray-300 px-5 py-2 text-sm uppercase text-gray-300 lg:mt-20'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.5, type: 'spring', duration: 2 }}
      >
        <MailOpen className='inline-block h-4' />
        Open Invitation
      </motion.button>
    </section>
  )
}

export default Intro
