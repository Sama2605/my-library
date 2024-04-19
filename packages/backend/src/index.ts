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

  newBook.id = booksData.length + 1
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

const port = 4422
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
