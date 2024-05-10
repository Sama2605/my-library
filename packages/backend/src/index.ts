import express from 'express'
import { booksData } from './data/books'
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(bodyParser.json())

app.get('/books', (_req, res) => {
  res.json(booksData)
})

app.post('/book', (req, res) => {
  const newBook = req.body

  newBook.id = Math.max(...booksData.map(({ id }) => id)) + 1
  booksData.push(newBook)

  fs.writeFile('src/data/books.ts', `export const booksData = ${JSON.stringify(booksData, null, 2)}`, (err) => {
    if (err) {
      console.error('Error writing file:', err)
      return res.status(500).json({ error: 'Internal server error' })
    }

    console.log('Book added successfully:', newBook)
    res.status(201).json(newBook)
  })
})

app.delete('/book/:bookId', (req, res) => {
  const { bookId } = req.params

  const newData = booksData.filter(({ id }) => id !== parseInt(bookId))
  fs.writeFile('src/data/books.ts', `export const booksData = ${JSON.stringify(newData, null, 2)}`, (err) => {
    if (err) {
      console.error('Error writing file:', err)
      return res.status(500).json({ error: 'Internal server error' })
    }

    console.log('Book removed successfully:', bookId)
    res.status(204).json({ bookId })
  })
})

const port = 4422
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
