const ThongTinCongTy = require('../model/QuanLyNhanSu/thongtincongty');
const successResponse = require('../model/response/success');
const errorResponse = require('../model/response/error');
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const SuccessResponse = require('../model/response/success');
exports.LayThongTinCongTy = asyncMiddleware(async(req, res, next) => {
  let thongtincongty = await ThongTinCongTy.LayThongTinCongTy();
  res.status(200).json(new SuccessResponse(200, thongtincongty, "Successful"));
});
