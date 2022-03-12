import { NextApiRequest, NextApiResponse } from 'next'
import users from './fake/data' // should come from actual database

export default (_: NextApiRequest, res: NextApiResponse) =>
  res.status(200).json(users)
