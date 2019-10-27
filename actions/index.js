import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []

const CATEGORY_DATA = [
  {
    id: 'c-1',
    name: 'drama',
  },
  {
    id: 'c-2',
    name: 'action',
  },
  {
    id: 'c-3',
    name: 'adventure',
  },
  {
    id: 'c-4',
    name: 'historical',
  },
]

export const getMovies = () =>
  axios.get(`${BASE_URL}/api/v1/movies`).then(({ data: movies }) => movies)

export const getMovieById = id =>
  axios.get(`${BASE_URL}/api/v1/movie/${id}`).then(({ data: movie }) => movie)

export const getCategories = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(CATEGORY_DATA), 50))

export const createMovie = movie => {
  movie.id = Math.random()
    .toString(36)
    .substr(2, 7)

  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(({ data }) => data)
}
