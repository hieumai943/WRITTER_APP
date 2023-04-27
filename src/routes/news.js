const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewController');
// neu la duoi /create thi se thuc hien lenh create
router.get('/create', newsController.create);
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
router.post('/store', newsController.store);
module.exports = router;
