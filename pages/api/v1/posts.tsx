import { NextApiRequest, NextApiResponse } from 'next'
import { getSortedPostsData } from '../../../lib/posts'

const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('-------------------')
  console.log(req)
  const result = await getSortedPostsData()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify([{ name: 1 }]))
  res.end()
}

export default Posts
