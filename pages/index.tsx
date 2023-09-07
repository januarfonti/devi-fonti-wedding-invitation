import AudioPlayer from '@/components/audioPlayer'
import MetaHead from '@/components/metaHead'
import ScrollToTop from '@/components/scrollToTop'
import Countdown from '@/components/section/countdown'
import Ending from '@/components/section/ending'
import Gallery from '@/components/section/gallery'
import Greeting from '@/components/section/greeting'
import GroomAndBride from '@/components/section/groom-and-bride'
import Guestbook from '@/components/section/guestbook'
import Hashtag from '@/components/section/hashtag'
import Intro from '@/components/section/intro'
import Loading from '@/components/section/loading'
import Venue from '@/components/section/venue'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [showMain, setShowMain] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowMain(true)
    }, 3000)
  }
  return (
    <>
      <MetaHead />
      <AnimatePresence>
        {!showMain && !isLoading ? (
          <section className='absolute inset-0 z-20'>
            <Intro onButtonClick={handleButtonClick} />
          </section>
        ) : (
          <>
            {isLoading && <Loading />}
            <main style={{ display: isLoading ? 'none' : 'block' }} className='overflow-x-hidden'>
              <Greeting isOpened={showMain} />
              <Hashtag isOpened={showMain} />
              <GroomAndBride isOpened={showMain} />
              <Venue isOpened={showMain} />
              <Countdown isOpened={showMain} />
              <Gallery />
              <Guestbook />
              <Ending />
              <AudioPlayer src='/audio.mp3' isOpened={showMain} />
              <ScrollToTop isOpened={showMain} />
            </main>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
