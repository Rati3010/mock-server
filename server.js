const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();
const port = 4001;
server.use(jsonServer.bodyParser)
server.use(middlewares);
server.use(router);
server.listen(port);