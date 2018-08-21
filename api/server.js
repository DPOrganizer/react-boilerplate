const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server({
	host: 'localhost',
	port: 3000,
});

// Add the route
server.route({
	method: 'GET',
	path: '/',
	handler: () => 'Nothing to see here',
});

server
	.start()
	.then(() => {
		console.log('Server running at:', server.info.uri);
	})
	.catch(err => console.log(err));
