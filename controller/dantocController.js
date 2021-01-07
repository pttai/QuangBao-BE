const DanToc = require('../model/QuanLyNhanSu/dantoc');
const ErrorResponse = require('../model/response/error');
const SuccessResponse = require('../model/response/success');
const asyncMiddleware = require('../middlewares/asyncMiddleware');


exports.LayDanhSachDanToc = asyncMiddleware(async(req, res, next) => {
  const danhSachDanToc = await DanToc.LayDanhSachDanToc();
  res.status(200).json(new SuccessResponse(200, danhSachDanToc, "Successful"));
});