import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById } from '../../../actions'

const EditMovie = ({ movie }) => (
  <div className="container">
    <h2>Edit the Movie</h2>
    <MovieCreateForm initialData={movie} />
  </div>
)

EditMovie.getInitialProps = async ({ query: { id } }) => {
  const movie = await getMovieById(id)

  return { movie }
}

export default EditMovie
