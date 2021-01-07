const express = require('express');
const connectDB = require('./database/connectDB');
const cors = require('cors');
//>> Route import here
const NhanVienRoute = require('./routes/nhanvien/route');
const UserRoute = require('./routes/user/route');
const ChucVuRoute = require('./routes/chucvu/route');
const DanTocRoute = require('./routes/dantoc/route');
const CongtyRoute = require('./routes/congty/route');
const HopdongRoute = require('./routes/hopdong/route');


connectDB.getConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


require('colors');
//>> Use route here
app.use('/api/nhanvien', NhanVienRoute);
app.use('/api/login', UserRoute);
app.use('/api/chucvu', ChucVuRoute);
app.use('/api/dantoc', DanTocRoute);
app.use('/api/congty', CongtyRoute);
app.use('/api/hopdong', HopdongRoute);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
  console.log(`Listen on PORT ${PORT}`);
});
