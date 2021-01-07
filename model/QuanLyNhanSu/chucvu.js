const mongoose = require('mongoose');
const ChucVu = new mongoose.Schema({
  "tenchucvu": {
    type: String,
    required: [true, 'Tên chức vụ không được để trống'],
    unique: [true, 'Chức vụ đã tồn tại']
  },
  "mota": {
    type: String,
  }
},{collection: "ChucVu"});

ChucVu.static('DanhSachChucVu', function(){
  return this.find();
});

module.exports = mongoose.model("ChucVu", ChucVu);