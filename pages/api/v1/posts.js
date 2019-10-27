import axios from 'axios'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { body: post } = req

    return res.json({
      status: 'Saving Post to DB!',
      ...JSON.parse(post),
    })
  } else {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )

    return res.json(posts.slice(0, 20))
  }
}
