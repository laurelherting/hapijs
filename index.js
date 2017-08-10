'use strict'
const Path = require('path')
const Hapi = require('hapi')
const Inert = require('inert')

const server = new Hapi.Server()
server.connection({ port: 8000 })

server.register(Inert, () => {
  
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
        }
    }
  })
  server.start(() => console.log(`Started at: ${server.info.uri}`)
})
