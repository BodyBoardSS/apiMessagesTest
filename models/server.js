const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT || 3000
        this.messagePath = '/api/message'

        //Middlewares
        this.middlewares()
        //rutas de ingreso al server
        this.routes()
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.messagePath,require('../routes/message'))
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Message app listening on port ${this.PORT}...`)
          })
    }

}

module.exports = Server;