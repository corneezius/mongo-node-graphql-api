"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskTC = exports.Task = exports.TaskSchema = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TaskSchema = new _mongoose.Schema({
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  task: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  }
}, {
  collection: 'tasks'
});
exports.TaskSchema = TaskSchema;
TaskSchema.plugin(_mongooseTimestamp.default);
TaskSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Task = _mongoose.default.model('Task', TaskSchema);

exports.Task = Task;
const TaskTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Task);
exports.TaskTC = TaskTC;