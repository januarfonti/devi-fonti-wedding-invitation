import GuestbookForm from '@/components/guestbookForm'
import { useGuestbookStore } from '@/store/guestbook'
import moment from 'moment'
interface Entry {
  id: number
  name: string
  message: string
  createdAt: string
}

function Guestbook() {
  // Since we don't have database, we will use zustand to store the data
  const { entries } = useGuestbookStore()

  // Uncomment this for production

  // const [entries, setEntries] = useState<Entry[]>([])

  // const fetchEntries = async () => {
  //   const response = await fetch('/api/guestbook')
  //   const data = await response.json()
  //   setEntries(data)
  // }

  // useEffect(() => {
  //   fetchEntries()
  // }, [])

  const handleFormSubmit = async () => {
    // await fetchEntries()
  }

  return (
    <section className='z-10 bg-[#171A0D] p-4 md:px-10 md:py-10'>
      <h1 className='-z-0 text-lg font-bold uppercase tracking-tighter text-gray-300 md:text-3xl lg:text-4xl'>
        Guestbook
      </h1>
      <p className='mb-4 text-xs text-gray-300 md:text-2xl lg:text-3xl lg:font-extralight'>
        Your words of love and encouragement
      </p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <GuestbookForm onSubmit={handleFormSubmit} />
        {entries.length > 0 && (
          <div className='mt-4 max-h-40 overflow-y-auto rounded bg-[#13160b] p-4 text-sm text-gray-200'>
            {entries.map((entry, index) => (
              <div key={entry.id}>
                <div className='flex justify-between gap-2'>
                  <h1 className='uppercase tracking-tighter'>{entry.name}</h1>
                  <span className='text-xs text-gray-200/10'>
                    {moment(entry.createdAt).format('DD MMM YY HH:mm')}
                  </span>
                </div>
                <p className='text-xs text-gray-400'>{entry.message}</p>
                {index !== entries.length - 1 && (
                  <div className='mb-2 border-b-2 border-[#171A0D] pt-2' />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Guestbook
