const editFileRouter = require('./editFile');
// đây là 2 router -> từ đây sẽ có các router phụ nằm trong các file .js ở trong folder routes luôn
const siteRouter = require('./site') 
const MeRouter = require('./me') 
function route(app){
    app.use('/editFile', editFileRouter);
    app.use('/', siteRouter);
    app.use('/me', MeRouter);
  
}
module.exports = route;

// xuat cho cac module khac su dung


// ta hiểu trang index.js này để tổng hợp các router chính
//  được sử dụng trong toàn bộ web