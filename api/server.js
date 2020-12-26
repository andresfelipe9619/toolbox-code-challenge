const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Cannot coonect to the port ${PORT} with error ${err}`)
  } else { console.log(`Connected to port ${PORT} succesfully`) }
})
