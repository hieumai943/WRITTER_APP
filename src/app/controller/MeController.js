const Course = require('../models/Course')  
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {
  note(req,res,next){
    Course.find({})
    .then(courses => res.render('me/note',{
      courses: mutipleMongooseToObject(courses)
    }))
    .catch(next);
   
  }
    watch(req,res,next){
      res.render('editFile');
    }
   
}

module.exports = new MeController();