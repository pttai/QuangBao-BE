const mongoose = require('mongoose');
require('dotenv').config();
class ConnectMongo{
  constructor(){
    this.uri = null;
  }
  static getConnect(){
    this.uri = process.env.MONGO_URL;
    mongoose.connect(this.uri,{
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    });
    
    const connect = mongoose.connection;

    connect.once('open', () => {
      console.log("DB connected");
    });
  };
}

module.exports = ConnectMongo;