import express from 'express'

const app = express()

const port = 4422
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
