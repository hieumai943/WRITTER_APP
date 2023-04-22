const newsRouter = require('./news');
const siteRouter = require('./site') 
function route(app){
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;

// xuat cho cac module khac su dung