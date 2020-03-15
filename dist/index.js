"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = _interopRequireDefault(require("mongoose"));

require("./utils/db");

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
const server = new _apolloServerExpress.ApolloServer({
  schema: _schema.default,
  cors: true,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/'
});
server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () => // eslint-disable-next-line no-undef
  new Promise((resolve, reject) => {
    if (_mongoose.default.connection.readyState > 0) {
      resolve();
    } else {
      reject();
    }
  })
});
app.listen({
  port: process.env.PORT
}, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});