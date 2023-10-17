// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// กำหนดพอร์ตที่เซิร์ฟเวอร์จะทำงาน
const PORT = process.env.PORT || 3000;

// เชื่อมต่อ MongoDB
mongoose.connect('mongodb://localhost:27mongodb+srv://atiwan:0961323507b@cluster0.qw9r5ko.mongodb.net/017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// สร้างโครงสร้างข้อมูลผู้ใช้
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// ใช้ body-parser middleware เพื่ออ่านข้อมูล JSON
app.use(bodyParser.json());

// เส้นทางสำหรับการล็อกอิน
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // ค้นหาผู้ใช้ด้วยอีเมล
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'ผู้ใช้ไม่พบ' });
  }

  // ตรวจสอบรหัสผ่าน
  if (user.password !== password) {
    return res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
  }

  res.json({ message: 'ล็อกอินสำเร็จ' });
});

app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์ทำงานที่พอร์ต ${PORT}`);
});
