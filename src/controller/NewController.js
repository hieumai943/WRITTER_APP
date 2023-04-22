class NewController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('Hieu dep trai');
    }
}

module.exports = new NewController();