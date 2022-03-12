import { NextApiRequest, NextApiResponse } from 'next'
import users from './data'

export default (_: NextApiRequest, res: NextApiResponse) =>
  res.status(200).json(users)
