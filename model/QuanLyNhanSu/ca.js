const mongoose = require('mongoose');

const Ca = new mongoose.Schema({
  "tenca": {
    type: String
  },
  "giobatdau": {
    type: String
  },
  "gioketthuc": {
    type: String
  },
  "batdaunghigiuaca": {
    type: String
  },
  "kethucnghigiuaca": {
    type: String
  }
}, {collection: "Ca"});

module.exports = mongoose.model("Ca", Ca);