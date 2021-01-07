const express = require('express');
const router = express.Router();
const hopdongController = require('../../controller/hopdongController');
router.route('/danhsachhopdong').get(hopdongController.LayDanhSachHopDongLaoDong);

module.exports = router;