const mongoose = require('mongoose');
const ChucVu = require('./chucvu');
const Schema = mongoose.Schema;
const User = new mongoose.Schema({
  username : {
    type: String,
    unique: true
  },
  "password": {
    required: true,
    type: String,
    minlength: [10, 'Mật khẩu phải nhập tối thiểu 6 ký tự']
  },
  idchucvu: {
    type: Schema.Types.ObjectId,
    ref: 'ChucVu'
  }
},{collection:"User"});

User.static('LayUserTheoUsername', function(username){
  return this.findOne({username}).populate('idchucvu');
});


module.exports = mongoose.model("User", User);
