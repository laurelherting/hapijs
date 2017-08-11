'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

  server.route({
    method: ['POST', 'PUT'],
    path: '/',
    config: {
      payload: {
        output: 'data',
        parse: false,
        allow: 'application/json'
      }
    },
    handler: (request, reply) => {
      reply(request.payload)
    }
  })
server.start(() => {})
