import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const organic_results = [
        {
          position: 1,
          title: `simple title - ${req.query.searchTerm}`,
          link: "www.abc.com",
          thumbnail: "thumbnail",
          snippet: "sample snippet"
        },
        {
            position: 2,
            title: `simple title 2 - ${req.query.searchTerm}`,
            link: "www.abc.com",
            thumbnail: "thumbnail 2",
            snippet: "sample snippet 2"
          }
      ]


    const updated_on = (new Date()).getTime()
    res.status(200).json(
        { organic_results, 
        updated_on });
}