const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');



router.get('/', siteController.index);
router.get('/out', siteController.logout)
router.delete('/:id',siteController.delete) ;

module.exports = router;
