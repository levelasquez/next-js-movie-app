import axios from 'axios'

export default async (req, res) => {
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return res.json(posts.slice(0, 20))
}
