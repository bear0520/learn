var net = require('net'),
    redis = require('redis');

var server = net.createServer(function(socket) {
    var subscriber,
        publisher;

    subscriber = redis.createClient();
    subscriber.subscribe('main_chat_room');
    subscriber.on('message', function(channel, message) {
        socket.write('\n' + 'Channel ' + channel + ': ' + message + '\n');
    });

    publisher = redis.createClient();

    socket.on('data', function(data) {
        publisher.publish('main_chat_room', data);
    });

    socket.on('end', function() {
        subscriber.unsubscribe('main_chat_room');
        subscriber.end();
        publisher.end();
    });

});

server.listen(3000);
