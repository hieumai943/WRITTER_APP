const Course = require('../models/Course')  
class SiteController {
    index(req, res,next) {
        Course.find({}) 
        .then(courses => {
            courses = courses.map(course => course.toObject())
            res.render('home',{courses})
        } ) 
        .catch( next)
           
        // res.render('home');
    }
    delete(req,res,next){
        Course.deleteOne({_id: req.params.id }, req.body)
        .then(()=> res.redirect('/'))
        .catch(next);
        
    } 
    logout(req,res,next){
        res.render('logout')
    }
}

module.exports = new SiteController();
// viec nay co nghia la minh se xuat class do ra ngoai,
// de ve sau co cai require thi no se lay tu NewController ra
