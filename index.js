'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.state('hello', {
  ttl: 60 * 60 * 1000,
  isHttpOnly: true,
  encoding: 'iron',
  password: 'aabjgfnbve88ru8ureah8948agnknoaeg99873'
})

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: (request, reply) => {
      let hello = request.state.hello
      reply(`Cookies! ${hello}`)
       .state('hello', 'world')
    }
  }
})

server.start(() => console.log('Started at: ${server.info.uri}'))
