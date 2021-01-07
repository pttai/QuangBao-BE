const express = require('express');
const router = express.Router();
const congtyController = require('../../controller/congtyController');

router.route('/laythongtincongty').get(congtyController.LayThongTinCongTy);

module.exports = router;
