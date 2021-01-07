const express = require('express');
const chucvuController = require('../../controller/chucvuController');
const route = express.Router();

route.route('/danhsachchucvu').get(chucvuController.DanhSachChucVu);

module.exports = route;