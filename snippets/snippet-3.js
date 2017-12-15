io.on('connection', function (socket) {

    console.log('a user is conencted', socket.id);

    //register the chat message event
    //listen for the chat message
    socket.on('chat message', function (msg) {
        //trigger or fired the chat message event
        io.emit('chat message', msg);
    });
});
