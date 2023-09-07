import { prisma } from '@/libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, message } = req.body
    const userAgent = req.headers['user-agent'] ?? ''
    const result = await prisma.guestbook.create({
      data: {
        name: name,
        message: message,
        userAgent: userAgent,
      },
    })
    return res.status(201).json(result)
  }
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return res.status(200).json(entries)
  }
  return res.status(400).end()
}
