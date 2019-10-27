import { useRouter } from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'

const EditMovie = ({ movie }) => {
  const router = useRouter()

  const handleUpdateMovie = movie =>
    updateMovie(movie).then(updatedMovie =>
      router.push('/movies/[id]', `/movies/${movie.id}`),
    )

  return (
    <div className="container">
      <h2>Edit the Movie</h2>
      <MovieCreateForm
        initialData={movie}
        handleFormSubmit={handleUpdateMovie}
        submitButton="Update"
      />
    </div>
  )
}

EditMovie.getInitialProps = async ({ query: { id } }) => {
  const movie = await getMovieById(id)

  return { movie }
}

export default EditMovie
