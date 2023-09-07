import { AnimatePresence, motion, Variants } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

const animationVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

function ScrollToTop({ isOpened }: { isOpened: boolean }) {
  const [isScrolling, setIsScrolling] = useState(false)
  const { y: scrollY } = useWindowScroll()

  useEffect(() => {
    setIsScrolling(scrollY > 10)
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isOpened && isScrolling && (
        <motion.div
          className='fixed bottom-4 right-4 z-50'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <button
            className='rounded bg-lime-900 p-1 font-bold text-white hover:bg-lime-600'
            onClick={scrollToTop}
          >
            <ChevronUp size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
