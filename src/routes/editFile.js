const express = require('express');
const router = express.Router();
const EditController = require('../app/controller/EditController');

router.get('/:slug', EditController.show); // doan nay chua hieu cach xu ly 
router.get('/', EditController.index);
router.post('/store', EditController.store); // cai store nay la khi mình nhấn button nó sẽ lưu dữ liệu vào database 
module.exports = router;
