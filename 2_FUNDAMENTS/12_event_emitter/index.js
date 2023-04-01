const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log("During..")
    //Your could do a global code to be called in this event from everywhere in your code
})

console.log("Before..")

eventEmitter.emit('start')

console.log("After")