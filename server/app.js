const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const templateRouter = require('./routes/template_data');
const statsRouter = require("./routes/statistics");
const computeRouter = require("./routes/computeColumn");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/template-data', templateRouter);
app.use("/api/statistics", statsRouter);
app.use("/", express.static(path.join(__dirname,"..","build")));
app.use("/api/compute", computeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
