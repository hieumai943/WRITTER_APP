const express = require('express');
const methodOverride = require('method-override')
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3333;
const path = require('path');

const route = require('./routes');
// connect to  db
const db = require('./config/db');


app.use(express.static(path.join(__dirname, 'public')));
// no se coi phan localhost:3000/ nhu la public/ dan den ra duoc ket qua anh
// app.use(morgan('combined'))
app.use(express.urlencoded());
app.use(express.json());
// dung methodoverride de giup cho minh co the dung method : put 
    app.use(methodOverride('_method'))
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
           sum: (a,b) => a+b,
           
        }
    }),
    
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.urlencoded({
    extended: true
   }))
   db.connect();
route(app);
app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}`);
})