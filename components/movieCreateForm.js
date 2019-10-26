import { useState } from 'react'

const MovieCreateForm = () => {
  const [form, setForm] = useState({
    name: 'Some Movie',
    description: 'Some Description',
  })

  const handleChange = ({ target: { name, value } }) =>
    setForm({
      ...form,
      [name]: value,
    })

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          name="name"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          name="description"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={form.rating}
          name="rating"
          onChange={handleChange}
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{' '}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          value={form.image}
          name="image"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          value={form.cover}
          name="cover"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          value={form.longDesc}
          name="longDesc"
          onChange={handleChange}
          className="form-control"
          id="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          value={form.genre}
          name="genre"
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
    </form>
  )
}

export default MovieCreateForm
