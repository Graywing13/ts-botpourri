import express from 'express'
import { log } from './util/log'

const app = express()
const PORT = 3000

app.listen(PORT, () => {
  log.info(`Server running at http://localhost:${PORT}/`)
})

app.get('/', (req, res) => {
  log.trace(`Received request ${JSON.stringify(req.body)}`)
  res.statusCode = 200
  res.send('Hello there!')
})
