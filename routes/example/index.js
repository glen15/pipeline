'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'project-02-code-pipeline : version 1.0'
  })
}
