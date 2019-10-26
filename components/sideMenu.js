import Modal from './modal'

const SideMenu = ({ categories }) => (
  <div>
    <Modal />
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

export default SideMenu
