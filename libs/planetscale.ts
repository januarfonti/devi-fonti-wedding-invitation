// import 'server-only' not working with API routes yet
import { Generated, Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

interface GuestbookTable {
  id: Generated<number>
  name: string
  message: string
}

interface Database {
  Guestbook: GuestbookTable
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
})
