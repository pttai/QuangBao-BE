const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NhanVien = require('../QuanLyNhanSu/nhanvien');
const ThongTinCongTy = require('../QuanLyNhanSu/thongtincongty');
const HopDong = new mongoose.Schema({
  "loaihopdong":{
    type: String,
    required: [true, "Loại hợp đồng không được để trống"],
  },
  "ngaybatdau": {
    type: Date,
    required: [true, "Ngày bắt đầu không được để trống"],  
  },
  "ngayketthuc": {
    type: Date,
    required: [true, 'Ngày kết thúc không được để trống']
  },
  "noidung": {
    type: String,
    required: [true, "Nội dung không được để trống"]
  },
  "idnhanvien": {
    type: Schema.Types.ObjectId,
    required: [true, "Id nhân viên không được để trống"],
    ref: 'NhanVien'
  },
  "idcongty": {
    type: Schema.Types.ObjectId,
    required: [true, "Id công ty không được để trống"],
    ref: 'ThongTinCongTy'
  }
}, {collection: 'HopDong'});

HopDong.static('LayDanhSachHopDong', function(){
  return this.find().populate({
    path: 'idnhanvien',
    select: {
      "tennhanvien": 1
    }
  }).populate({
    path: 'idcongty',
    select: {
      "_id": 0,
      "tendoanhnghiep": 1,
    },
    populate: {
      path: 'idnguoidaidien',
      select: {
        '_id': 0,
        'tennhanvien': 1,
      }
    }
  });
});

HopDong.static('LayHopDongTheoId', function(id){
  return this.findOne({id}).populate('idnhanvien').populate('idcongty');
})

module.exports = new mongoose.model("HopDong", HopDong);