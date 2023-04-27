const Course = require('../models/Course')  
const { mongooseToObject } = require('../../util/mongoose')
class NewController {
    index(req, res) {
        res.render('news');
    }
    show(req, res,next) {
      Course.findOne({slug:req.params.slug})
      .then(course => {
       res.render('news',{course: mongooseToObject(course)})
      })
      .catch(next);
    }
    // khi co /create thi no se thuc hien lenh trong create
    create(req,res,next){
       res.render('news');
    }
    // post news/store
    store(req,res,next){
        const courses = new Course(req.body);
        courses.save()
        .then(()=> res.redirect('/'))
        .catch(error =>{

        });
       
        // res.json(req.body)
     }
}

module.exports = new NewController();