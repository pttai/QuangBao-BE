const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NhanVien = require('../QuanLyNhanSu/nhanvien');
const ChucVu = require('../QuanLyNhanSu/chucvu');
const ThongTinCongTy = new Schema({
  "tendoanhnghiep": {
    type: String,
    required: [true, "Tên doanh nghiệp không được để trống"]
  },
  "tinhtranghoatdong":{
    type: String,
    required: [true, "Tình trạng hoạt động không được để trống"]
  },
  "loaihinhphaply":{
    type: String,
    required: [true, "Loại hình pháp lý không được để trống"]
  },
  "ngaythanhlap": {
    type: Date,
    required: [true, "Ngày thành lập không được để trống"]
  },
  "diachi": {
    type: String,
    required: [true, "Địa chỉ không được để trống"],
  },
  "nganhkinhdoanh": {
    type: String,
    required: [true, "Ngành kinh doanh không được để trống"]
  },
  "idnguoidaidien": {
    type: Schema.Types.ObjectId,
    required: [true, "Người đại diện không được để trống"],
    ref: 'NhanVien'
  }
}, {collection: "ThongTinCongTy"});

ThongTinCongTy.static('LayThongTinCongTy', function(){
  return this.find().populate({
    path: 'idnguoidaidien',
    select: {
      'tennhanvien': 1,
      'idchucvu': 1,
      '_id': 0
    },
    populate: {
      path: 'idchucvu',
      select: {
        'tenchucvu': 1,
        '_id': 0
      }
    }
  });
});

module.exports = new mongoose.model('ThongTinCongTy', ThongTinCongTy);