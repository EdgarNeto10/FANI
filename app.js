var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();



/*Está a fazer a requisição do router criado */

var narrativasRouter = require('./routes/narrativasRoutes');
var caminhosRouter = require('./routes/caminhosRoutes');
var updateNarrRouter = require('./routes/updatenarrativasRoutes');

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* A montar o router com um determinado caminho  */

app.use('/api/narrativas', narrativasRouter);
app.use('/api/caminhos', caminhosRouter);
app.use('/api/update/passagens', updateNarrRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;