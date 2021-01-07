const asyncMiddleware = require('../middlewares/asyncMiddleware');
const NhanVien = require('../model/QuanLyNhanSu/nhanvien');
const ChucVu = require('../model/QuanLyNhanSu/chucvu');
const DanToc = require('../model/QuanLyNhanSu/dantoc');
const ErrorResponse = require('../model/response/error');
const SuccessResponse = require('../model/response/success');
const ObjectId = require('mongoose').Types.ObjectId;

//>> LẤY DANH SÁCH NHÂN VIÊN
exports.LayDanhSachNhanVien = asyncMiddleware(async (req, res, next) => {
  let danhSachNhanVien = await NhanVien.find()
    .populate('idchucvu')
    .populate('iddantoc');
  res.status(200).json(danhSachNhanVien);
});


//>> LẤY NHÂN VIÊN THEO ID
exports.LayNhanVienTheoId = asyncMiddleware(async (req, res, next) => {
  let { id } = req.params;
  if(ObjectId.isValid(id)){
    let danhSachNhanVien = await NhanVien
    .findOne({_id: id })
    .populate('idchucvu')
    .populate('iddantoc');
    if(!danhSachNhanVien)
      res.status(404).json(new ErrorResponse(404, "Không tìm thấy nhân viên"));
    else
      res.status(200).json(new SuccessResponse(200, "Successful", danhSachNhanVien));
  }
  else
    res.status(404).json(new ErrorResponse(404, "Không tìm thấy nhân viên"));
});


//>> SỬA NHÂN VIÊN
exports.SuaNhanVien = asyncMiddleware(async (req, res, next) => {
  let {id} = req.params;
  console.log(id);
  let {tennhanvien, gioitinh, sdt, email, diachi, 
    ngaysinh, quequan, trangthai, 
    idchucvu, iddantoc, idtrinhdo} = req.body;
  
  let motNhanVien = await NhanVien.findByIdAndUpdate(id, {
    tennhanvien: tennhanvien,
    gioitinh: gioitinh,
    quequan: quequan,
    sdt: sdt,
    email: email,
    diachi: diachi,
    ngaysinh: ngaysinh,
    trangthai: trangthai,
    idchucvu: idchucvu,
    iddantoc: iddantoc,
    idtrinhdo: idtrinhdo
  }, function(err){
    if(err){
      res.status(404).json(new ErrorResponse(404, err));
      res.end();
    }
  });
  res.status(200).json(new SuccessResponse(200, motNhanVien, "Sửa thông tin thành công"));
});

//>> THÊM NHÂN VIÊN 
exports.ThemNhanVien = asyncMiddleware(async(req, res, next)=> {
  let {tennhanvien, gioitinh, sdt, email, diachi, 
    ngaysinh, quequan, trangthai, 
    idchucvu, iddantoc, idtrinhdo} = req.body;
  
  let ngaybatdau = Date.now();
  let nhanVienMoi = new NhanVien({tennhanvien, gioitinh, sdt, email, 
    diachi, ngaysinh, quequan, ngaybatdau, trangthai, idchucvu, iddantoc, idtrinhdo});
  let rs = await nhanVienMoi.save(function(err){
    if(err){
      if(err.keyValue){
        res.status(400).json(new SuccessResponse(400, 'Email này đã được đăng ký'));
      }
      else{
        res.status(400).json(new SuccessResponse(400, err));
      }
    } 
    else 
      res.status(200).json(new SuccessResponse(200, rs, "Thêm thành công"));
  });
 
});

//>> XÓA NHÂN VIÊN

exports.XoaNhanVien = asyncMiddleware(async(req, res, next) => {
  let {id} = req.params;
  let rs = await NhanVien.XoaNhanVien(id);
  res.status(200).json(new SuccessResponse(200, rs, "Xóa thành công"));
});