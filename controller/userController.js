const asyncMiddleware = require('../middlewares/asyncMiddleware');
const User = require('../model/QuanLyNhanSu/user');
const ChucVu = require('../model/QuanLyNhanSu/chucvu');
const ErrorResponse = require('../model/response/error');
const SuccessResponse = require('../model/response/success');

exports.Login = asyncMiddleware(async (req,res,next) => {
  const {username, password} = req.body;
  let validateUser = await User.LayUserTheoUsername(username);
  if(!validateUser)
    res.status(404).json(new ErrorResponse(404, 'User not found'));
  else {
    if(validateUser.username == username && validateUser.password == password){
      res.status(200).json(new SuccessResponse(200, validateUser, 'Đăng nhập thành công'));
    }
    else {
      res.status(404).json(new ErrorResponse(404, 'Sai tên đăng nhập hoặc mật khẩu!'));
    }
  }
});
