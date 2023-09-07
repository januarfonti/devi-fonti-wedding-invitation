'use client'

import { useGuestbookStore } from '@/store/guestbook'
import { useRouter } from 'next/router'
import { useState } from 'react'
interface GuestbookFormProps {
  onSubmit: () => void
}

const GuestbookForm = ({ onSubmit }: GuestbookFormProps) => {
  const { q } = useRouter().query
  const [name, setName] = useState(q ? q.toString() : '')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  const addStoreEntry = useGuestbookStore((state) => state.addEntry)

  // Comment this line for production, this is just for generating random id
  // and cretedAt
  const randomNum = Math.floor(Math.random() * 1000)
  const createdAt = new Date().toISOString()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !message) {
      setFormError(true)
      return
    }

    setIsLoading(true)

    // Since we don't have database, we will use zustand to store the data

    addStoreEntry({ id: randomNum, name, message, createdAt })

    // Uncomment this line for production
    // const storeGuestbookEntry = useGuestbookStore((state) => state.storeGuestbookEntry)
    // const response = await fetch('/api/guestbook', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name,
    //     message,
    //   }),
    // })

    // const data = await response.json()

    setIsLoading(false)
    setName('')
    setMessage('')
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        className={`w-full appearance-none rounded bg-gray-200 py-1 px-2 text-xs leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ${
          formError && name === '' ? 'ring-red-500' : 'ring-slate-200'
        } focus:outline-none focus:ring-2 focus:ring-slate-900`}
        type='text'
        aria-label='Name'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className={`w-full appearance-none rounded bg-gray-200 py-1 px-2 text-xs leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ${
          formError && message === '' ? 'ring-red-500' : 'ring-slate-200'
        } focus:outline-none focus:ring-2 focus:ring-slate-900`}
        aria-label='Message'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
      />

      <button
        type='submit'
        disabled={isLoading}
        className='rounded bg-[#744519] py-2 text-sm uppercase text-white'
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default GuestbookForm
