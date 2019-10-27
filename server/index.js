const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const moviesData = require('./data.json')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const filePath = './data.json'

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData)
  })

  server.get('/api/v1/movie/:id', (req, res) => {
    const { id } = req.params

    return res.json(moviesData.find(movie => movie.id === id))
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    moviesData.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been successfuly added!')
    })
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params

    return res.json({ message: `Updating movie for id: ${id}` })
  })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params

    return res.json({ message: `Deleting movie for id: ${id}` })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000

  server.listen(PORT, err => {
    if (err) throw err

    console.log('> Ready on port ' + PORT)
  })
})
