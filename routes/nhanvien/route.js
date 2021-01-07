const express = require('express');
const nhanvienController = require('../../controller/nhanvienController');

const router = require('express').Router();

router.route('/danhsachnhanvien')
.get(nhanvienController.LayDanhSachNhanVien);

router.route('/danhsachnhanvien/:id').get(nhanvienController.LayNhanVienTheoId);

router.route('/themnhanvien').post(nhanvienController.ThemNhanVien);

router.route('/suanhanvien/:id').put(nhanvienController.SuaNhanVien);

router.route('/xoanhanvien/:id').delete(nhanvienController.XoaNhanVien);
module.exports = router;