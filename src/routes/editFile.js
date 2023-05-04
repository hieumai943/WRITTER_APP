const express = require('express');
const router = express.Router();
const EditController = require('../app/controller/EditController');

router.get('/:slug', EditController.show); // doan nay chua hieu cach xu ly 
router.get('/edit/:slug',EditController.edit) // slug o day la coure.inputVal(ten file)
router.put('/edit/:id',EditController.update) // slug o day khac vs cai o tren la vi no la course._id

router.get('/', EditController.index);
router.post('/store', EditController.store); // cai store nay la khi mình nhấn button nó sẽ lưu dữ liệu vào database 
module.exports = router;
