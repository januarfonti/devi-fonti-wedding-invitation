import guestbook from '@/data/guestbook'
import { IGuestbookEntry } from '@/types'
import { create } from 'zustand'

interface GuestbookState {
  entries: IGuestbookEntry[]
  addEntry: (entry: IGuestbookEntry) => void
}

export const useGuestbookStore = create<GuestbookState>((set) => ({
  entries: guestbook,
  addEntry: (entry) =>
    set((state) => ({
      entries: [...state.entries, entry],
    })),
}))
