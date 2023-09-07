import moment, { Moment } from 'moment'
import { useEffect, useState } from 'react'

interface CountdownProps {
  date: string
}

interface TimeRemaining {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer: React.FC<CountdownProps> = ({ date }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now: Moment = moment()
      const isoDateString = new Date(date).toISOString()
      const targetDate: Moment = moment(isoDateString)
      const duration: moment.Duration = moment.duration(targetDate.diff(now))

      setTimeRemaining({
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [date])

  return (
    <div className='z-10 flex gap-4 lg:gap-16'>
      <div className='flex flex-col items-center gap-1 lg:gap-16'>
        <span className='text-4xl font-bold lg:text-[150px]'>
          {timeRemaining.months.toString().padStart(2, '0')}
        </span>
        <span className='text-xs uppercase lg:text-4xl'>month</span>
      </div>
      <div className='flex flex-col items-center gap-1 lg:gap-16'>
        <span className='text-4xl font-bold lg:text-[150px]'>
          {timeRemaining.days.toString().padStart(2, '0')}
        </span>
        <span className='text-xs uppercase lg:text-4xl'>days</span>
      </div>
      <div className='flex flex-col items-center gap-1 lg:gap-16'>
        <span className='text-4xl font-bold lg:text-[150px]'>
          {timeRemaining.hours.toString().padStart(2, '0')}
        </span>
        <span className='text-xs uppercase lg:text-4xl'>hours</span>
      </div>
      <div className='flex flex-col items-center gap-1 lg:gap-16'>
        <span className='text-4xl font-bold lg:text-[150px]'>
          {timeRemaining.minutes.toString().padStart(2, '0')}
        </span>
        <span className='text-xs uppercase lg:text-4xl'>minutes</span>
      </div>
      <div className='flex flex-col items-center gap-1 lg:gap-16'>
        <span className='text-4xl font-bold lg:text-[150px]'>
          {timeRemaining.seconds.toString().padStart(2, '0')}
        </span>
        <span className='text-xs uppercase lg:text-4xl'>seconds</span>
      </div>
    </div>
  )
}

export default CountdownTimer
