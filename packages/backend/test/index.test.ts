import { expect } from 'chai'

describe('books', () => {
  it('get endpoint', async () => {
    const response = await fetch('http://localhost:4422/books')
    const data = await response.json()

    expect(data).to.deep.eq(testData)
  })
})

const testData = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: 1925 },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    published: 1960,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    published: 1949,
  },
]
