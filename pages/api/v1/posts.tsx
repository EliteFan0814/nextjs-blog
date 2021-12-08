import { NextApiRequest, NextApiResponse } from 'next'
import { getSortedPostsData } from '../../../lib/posts'

const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getSortedPostsData()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(result))
  res.end()
}

export default Posts
