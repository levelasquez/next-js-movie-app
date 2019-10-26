import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions'

const SideMenu = ({ categories }) => {
  let modal = null

  const handleCreateMovie = movie => {
    createMovie(movie).then(console.log)

    modal.closeModal()
  }

  return (
    <div>
      <Modal ref={ele => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Movie DB</h1>
      <div className="list-group">
        {categories.map(category => (
          <a key={category.id} href="#" className="list-group-item">
            {category.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
