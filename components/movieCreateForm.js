import { useState } from 'react'

const MovieCreateForm = ({ handleFormSubmit }) => {
  const [form, setForm] = useState({
    name: 'Some Movie',
    description: 'Some Description',
  })

  const handleChange = ({ target: { name, value } }) =>
    setForm({
      ...form,
      [name]: value,
    })

  const handleGenreChange = ({ target: { options } }) => {
    let values = []

    for (let i = 0; i < options.length; i = i + 1) {
      if (options[i].selected) {
        values.push(options[i].value)
      }
    }

    setForm({
      ...form,
      genre: values.toString(),
    })
  }

  const submitForm = () => handleFormSubmit({ ...form })

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
          onChange={handleGenreChange}
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
      <button onClick={submitForm} type="button" className="btn btn-primary">
        Create
      </button>
    </form>
  )
}

export default MovieCreateForm
