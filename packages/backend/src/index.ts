import express from 'express'
import { booksData } from './data/books'

const app = express()

const port = 4422
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/books', (_req, res) => {
  res.json(booksData)
})
