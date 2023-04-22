const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3333;
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// no se coi phan localhost:3000/ nhu la public/ dan den ra duoc ket qua anh
// app.use(morgan('combined'))
app.use(express.urlencoded());
app.use(express.json());
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
})