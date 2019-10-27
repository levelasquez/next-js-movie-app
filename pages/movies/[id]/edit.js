import { Component } from 'react'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById } from '../../../actions'

class EditMovie extends Component {
  static getInitialProps({ query }) {
    return { query }
  }

  state = { movie: {} }

  componentDidMount() {
    const {
      query: { id },
    } = this.props

    getMovieById(id).then(movie => this.setState({ movie }))
  }

  render() {
    return (
      <div className="container">
        <h2>Edit the Movie</h2>
        {JSON.stringify(this.state.movie)}
        <MovieCreateForm />
      </div>
    )
  }
}

export default EditMovie
