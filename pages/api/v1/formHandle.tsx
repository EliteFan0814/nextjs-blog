import { NextApiRequest, NextApiResponse } from 'next'

export default function formHandle(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  // res.write(JSON.stringify(result))
  res.end()
}
