const express = require('express');
const router = express.Router();
const dantocController = require('../../controller/dantocController');

router.route('/danhsachdantoc').get(dantocController.LayDanhSachDanToc);

module.exports = router;
