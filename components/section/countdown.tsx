import CountdownTimer from '@/components/countdownTimer'
import { weddingDate } from '@/libs/data'

function Countdown({ isOpened }: { isOpened: boolean }) {
  return (
    <section className='relative flex flex-col items-center overflow-hidden bg-[#171A0D] py-16 text-gray-300 md:px-10 md:py-10 lg:px-20 lg:py-[200px]'>
      <h1 className='custom-text-stroke-green absolute -z-0 -mt-7 text-6xl font-extrabold lg:-mt-40 lg:text-[250px]'>
        THE DAY
      </h1>
      <CountdownTimer date={weddingDate} />
    </section>
  )
}

export default Countdown
