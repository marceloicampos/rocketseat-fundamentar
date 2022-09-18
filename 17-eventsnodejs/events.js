// const events = require ('events')
// console.log(events)

const { EventEmitter } = require('events')
// console.log(EventEmitter);

const event = new EventEmitter()
// console.log(event);

event.on('say', ok => {
    console.log('OUVI:', ok)
})
// acima estamos ouvindo TODOS os eventos

event.once('say', ok => {
    console.log('OUVI:', ok)
})
// acima estamos ouvindo UM evento

event.emit('say', 'OKK')
event.emit('say', 'Marcelo')
event.emit('say', 'Campos')
// acima estamos emitimos o evento
