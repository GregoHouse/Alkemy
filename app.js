// ************ Require's ************
const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');// Para poder usar los métodos: PUT y DELETE


const session = require('express-session');
// const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

// const favicon = require('serve-favicon');

 

// ************ express() - (don't touch) ************
const app = express();
app.use(cors());

// ************ Template Engine - (don't touch) ************
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');


 // ************ Middlewares - (don't touch) *************
// app.use(favicon('./favicon.ico'));
app.use(express.static(path.join(__dirname,'./public'))) // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Necesario para procesar los datos enviados por los formularios
app.use(logger('dev')); 
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Poder usar metodo PUT y DELETE en los formularios vistas ejs.
app.use(session({
    secret: "Alkemy challenge full stack",
    resave: true,
    saveUninitialized: true
  }
))
// app.use(userLoggedMiddleware);

 






// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const indexRouter = require('./src/routes/index');
const apiUsersRouter = require('./src/routes/apis/users');
const apiOperationsRouter = require('./src/routes/apis/operations'); 
const apiCategoriesRouter = require('./src/routes/apis/categories'); 
const apiTypesRouter = require('./src/routes/apis/types'); 

app.use('/', indexRouter);
app.use('/api', apiUsersRouter);
app.use('/api', apiOperationsRouter);
app.use('/api', apiCategoriesRouter);
app.use('/api', apiTypesRouter); 



 
const PORT = 3001
app.listen(PORT, ()=>{
  console.log(`##########################\n\nServidor encendido en el puerto ${PORT}!!!!\n\n###########################`);
})



// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.send(res.locals.message)
  });