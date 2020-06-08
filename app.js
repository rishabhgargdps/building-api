const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ToDoRoutes = require('./api/routes/todo');

mongoose.connect(
  'mongodb+srv://User:Password@todos-edhow.mongodb.net/TODOs?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
//MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With,Content-Type,Accept,Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,PATCH,DELETE');
    return res.status(200).json({});
  }
  next();
});

//Routes
app.use('/todos', ToDoRoutes);

app.use('/', (req, res, next) => {
  res.json({ message: 'go to /todos to see the entries' });
});
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
