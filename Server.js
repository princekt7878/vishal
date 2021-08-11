const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://sos:Yash@9998@cluster0.t1hs7.mongodb.net/message-database?retryWrites=true&w=majority'

const Msg = require('./screens/Message');
const io = require('socket.io')(3000)

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected')
}).catch(err => console.log(err))
io.on('connection', (socket) => {
    Msg.find().then(result => {
        socket.emit('output-messages', result)
    })
    console.log('a user connected');
    socket.emit('message', 'Hello world');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chatmessage', msg => {
        const message = new Msg({ msg });
        message.save().then(() => {
            io.emit('message', msg)
        })


    })
});