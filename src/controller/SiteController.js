class SiteController {
    index(req, res) {
        res.render('home');
    }
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
// viec nay co nghia la minh se xuat class do ra ngoai,
// de ve sau co cai require thi no se lay tu NewController ra
