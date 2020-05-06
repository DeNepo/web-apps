'use strict';

const Express = require('express');

const Config = require('./config');

// import our CRUD actions
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo
} = require('./actions');

// import our Todo class
const Todo = require('./todo');

const FILENAME  = 'todos.json';
const PORT      = Config.PORT;
const TODO_SLUG = 'todos';

// let's make a new instance of our Todo class
const todo = new Todo(FILENAME);

// let's make a new instance of an express app
const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
// that way when someone sends us JSON data, we won't have to
// call `JSON.parse` ourselves
app.use(Express.json());

// CRUD style RESTful routes
app.post(`/${TODO_SLUG}`,       createTodo.bind(null, todo));
app.get(`/${TODO_SLUG}`,        readTodos.bind(null, todo));
app.put(`/${TODO_SLUG}/:id`,    updateTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, deleteTodo.bind(null, todo));

// let's start the server listening on PORT for new connections
app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://localhost:${PORT}`);
});
