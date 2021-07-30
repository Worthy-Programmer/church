import { instance } from './index.js';
const { PeerServer } = require('peer');
const io = require('socket.io')(instance.server);
const peerServer = PeerServer({ port: 9000 }, (server) =>
	console.log('THis is peer server', server)
);

peerServer.on('connection', (client) => console.log('Peer Server connected successfully'));

io.on('connection', (socket) => {
	console.log('SOCKET IO : Connection established');

	socket.on('join-room', (roomId, userId) => {
		console.log('Joining room : ' + roomId, 'userId', userId);
		socket.join(roomId);
		socket.broadcast.to(roomId).emit('user-connected', userId);

		socket.on('disconnect', () => {
			socket.broadcast.to(roomId).emit('disconnected', userId);
		});
	});
});
