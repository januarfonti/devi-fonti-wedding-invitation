import { hashTag, hashTagInfo } from '@/libs/data'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function Hashtag({ isOpened }: { isOpened: boolean }) {
  const [showCopiedOverlay, setShowCopiedOverlay] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(hashTag)
    setShowCopiedOverlay(true)
    setTimeout(() => {
      setShowCopiedOverlay(false)
    }, 2000)
  }

  return (
    <section className='relative flex flex-col overflow-hidden bg-[#171A0D] px-4 py-10 text-gray-300 md:px-10 md:py-10 lg:px-20 lg:py-16'>
      <h1 className='absolute top-[-10px] right-[-50px] -z-0 text-[250px] font-bold leading-[250px] text-[#121409] md:text-[400px]'>
        #
      </h1>
      <AnimatePresence>
        {isOpened && (
          <>
            <motion.h1
              className='z-10 mb-6 cursor-pointer select-none text-3xl font-bold leading-6 tracking-tight md:text-6xl lg:mt-4 lg:text-8xl'
              onClick={handleCopyClick}
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 500 }}
              transition={{ type: 'spring', duration: 2 }}
            >
              {hashTag}
            </motion.h1>
            <motion.p
              className='z-10 text-xs md:text-3xl md:font-extralight lg:max-w-5xl lg:text-4xl'
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ type: 'spring', duration: 2 }}
            >
              {hashTagInfo}
            </motion.p>
            <AnimatePresence>
              {showCopiedOverlay && (
                <motion.div
                  className='absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'tween', duration: 0.25 }}
                >
                  <p className='text-2xl text-white'>Hashtag copied! 🎉</p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hashtag
