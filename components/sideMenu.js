import { useRouter } from 'next/router'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions'

const SideMenu = ({ categories, changeCategory, activeCategory }) => {
  const router = useRouter()
  let modal = null

  const handleCreateMovie = movie =>
    createMovie(movie).then(movies => {
      modal.closeModal()

      router.push('/')
    })

  const handleCategoryChange = category => () => changeCategory(category)

  return (
    <div>
      <Modal ref={ele => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Movie DB</h1>
      <div className="list-group">
        {categories.map(category => (
          <a
            key={category.id}
            href="#"
            className={`list-group-item ${
              activeCategory === category.name ? 'active' : ''
            }`}
            onClick={handleCategoryChange(category.name)}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
