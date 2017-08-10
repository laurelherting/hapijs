'use strict'
const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server()
server.connection({ port: 8000 })

server.register(require('inert'), () => {
  
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {

        // path to image goes here
        path: '.',
      }
    }
  })
  server.start(() => console.log(`Started at: ${server.info.uri}`))
})
