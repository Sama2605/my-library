import express from 'express'
import { booksData } from './data/books'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/books', (_req, res) => {
  res.json(booksData)
})

const port = 4422
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
