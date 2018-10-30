import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import service from 'feathers-knex'
import knex from 'knex'

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'iotsmusg',
        database: 'iot'
    }
})

const socket = io('localhost:3306')

const feathersClient = feathers()
    .configure(socketio(socket))
    .use('/pi', service({
        Model: db,
        name: 'pi'
    }))
    .use('/stone', service({
        Model: db,
        name: 'stone'
    }))

export default feathersClient