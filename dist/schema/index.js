"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphqlCompose = require("graphql-compose");

var _db = _interopRequireDefault(require("../utils/db"));

var _user = require("./user");

var _task = require("./task");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars
const schemaComposer = new _graphqlCompose.SchemaComposer();
schemaComposer.Query.addFields({ ..._user.UserQuery,
  ..._task.TaskQuery
});
schemaComposer.Mutation.addFields({ ..._user.UserMutation,
  ..._task.TaskMutation
});

var _default = schemaComposer.buildSchema();

exports.default = _default;