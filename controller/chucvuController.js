const asyncMiddleware = require('../middlewares/asyncMiddleware');
const ChucVu = require('../model/QuanLyNhanSu/chucvu');
const successResponse = require('../model/response/success');
const errorResponse = require('../model/response/error');

exports.DanhSachChucVu = asyncMiddleware(async(req, res, next) => {
  const listDanhSachChucVu = await ChucVu.DanhSachChucVu();
  res.status(200).json(new successResponse(200, listDanhSachChucVu, "successful"));
});