import { PrismaClient } from '@prisma/client'
import express from 'express'
import { prisma } from './lib/prisma'

const app = express()

app.get('/', async (req, res) => {

  const users = await prisma.user.findMany()

  return res.json(users)
})

// app.get('/' , async (req, res) => {

//   return res.json({bunda: true})
// })

app.listen({
  port: process.env.PORT || 3333
})