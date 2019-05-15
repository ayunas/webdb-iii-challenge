const server = require('./server')
require('dotenv').config();


const port = process.env.PORT || 5500

server.listen(port, () => {
    console.log(`\n***Server listening on port ${port}`)
})

