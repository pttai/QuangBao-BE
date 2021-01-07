const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NhanVien = new mongoose.Schema({
  "tennhanvien": {
    type: String,
    required: [true, 'Tên nhân viên không được để trống']
  },
  "ngaybatdau":{
    type: Date,
    default: Date.now
  },
  "trangthai":{
    type: String
  },
  "gioitinh":{
    type: String,
    required: [true, 'Giới tính không được để trống']
  },
  "sdt": {
    type: String,
    required: [true, 'Số điện thoại không được để trống']
  },
  "email": {
    type: String,
    required: [true, 'Email không được để trống'],
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        );
      },
      message: 'Sai định dạng email',
    },
    unique: [true, "Email đã bị trùng với nhân viên khác"]
  },
  "ngaysinh": {
    type: Date,
    default: Date.now,
    required: [true, 'Ngày sinh không được để trống'] 
  },
  "quequan":{
    type: String,
    required: [true, 'Quê quán không được để trống']
  },
  "diachi": {
    type: String,
    required: [true, 'Địa chỉ không được để trống']
  },
  "iddantoc":{
    type: Schema.Types.ObjectId, ref: 'DanToc',
  },
  "idtrinhdo":{
    type: Schema.Types.ObjectId,
  },
  "idchucvu":{
    type: Schema.Types.ObjectId,
    ref: 'ChucVu'
  }
},{timestamps: true, collection: "NhanVien"});

NhanVien.static('LayDanhSachNhanVien', function(){
  return this.find();
}); 

NhanVien.static('XoaNhanVien', function(id){
  return this.findByIdAndDelete(id);
});

module.exports = mongoose.model("NhanVien", NhanVien);