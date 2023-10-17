import './MainR.css';
import { NavLink } from 'react-router-dom';
import 'jspdf-autotable';

function Risk() {
  return (
    <div className="App">
      <div className="header">
        <NavLink to="/" className='ml-2'>
          <img src="ringht.arrow.png" alt="โลโก้" className="profile" />
        </NavLink>
        
        <NavLink to="/" className='nav-links'>
          <img src="logo.png" alt="โลโก้" className="logo" />
        </NavLink>
        <img src="u.gif" alt="โลโก้" className="profile" />
      </div>
      <div className="content">
        <div className="student-info">
          <p>รหัสนักศึกษา: 651113755</p>
          <p>ชื่อ: อติวัณณ์ เสืออิ่ม</p>
          <p>นามสกุล: เสืออิ่ม</p>
          <p>สาขา: เทคโนโลยีสารสนเทศและนวตรรมดิจิทัล</p>
          <p>การเข้าร่วมกิจกรรม: 20/30</p>
        </div>
        <div className="student-image">
          <img src="Me.png" alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default Risk;
