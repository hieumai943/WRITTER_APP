const express = require('express');
const router = express.Router();
const MeController = require('../app/controller/MeController');


router.get('/watch', MeController.watch);
router.get('/note', MeController.note); // cai store nay la khi mình nhấn button nó sẽ lưu dữ liệu vào database 
module.exports = router;
