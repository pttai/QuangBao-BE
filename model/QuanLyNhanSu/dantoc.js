const mongoose = require('mongoose');
const DanToc = new mongoose.Schema({
  "tendantoc": {
    type: String
  }
}, {collection: "DanToc"});

DanToc.static('LayDanhSachDanToc', function(){
  return this.find();
});
module.exports = mongoose.model("DanToc", DanToc);