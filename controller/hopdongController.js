const HopDong = require('../model/QuanLyNhanSu/hopdong');
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const errorResponse = require('../model/response/error');
const successResponse = require('../model/response/success');

exports.LayDanhSachHopDongLaoDong = asyncMiddleware(async(req, res, next) => {
  let danhsachhopdong = await HopDong.LayDanhSachHopDong();
  res.status(200).json(new successResponse(200, danhsachhopdong, "Successful"));
});