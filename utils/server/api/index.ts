import { NextApiHandler } from 'next'

export interface Methods {
  get?: NextApiHandler
  post?: NextApiHandler
  put?: NextApiHandler
  delete?: NextApiHandler
}

export { default } from './api'
