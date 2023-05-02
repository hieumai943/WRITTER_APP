const Course = require('../models/Course')  
const { mongooseToObject } = require('../../util/mongoose')
class EditController {
    index(req, res) {
        res.render('editFile');
    }
    // dùng để từ database lôi nội dung đấy ra qua slug
    show(req, res,next) {
      Course.findOne({slug:req.params.slug})
      .then(course => {
       res.render('editFile',{course: mongooseToObject(course)})
      })
      .catch(next);
    }
    // dung để lưu content vào trong database
    store(req,res,next){
        const courses = new Course(req.body);
        courses.save()
        .then(()=> res.redirect('/')) // đưa về trang đầu tiên
        .catch(error =>{

        });
       
        
     }
}

module.exports = new EditController();