import React, { useState } from 'react';
import './MainST.css';
import { startOfMonth, endOfMonth, addDays,  } from 'date-fns';
import {NavLink} from "react-router-dom";
function MainIndexT() {
  const today = new Date();
  const [currentMonth, ] = useState(today);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [namemaster, setNameMaster] = useState('');
  
  const daysn = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const rows = [
    [1,2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 1, 2, 3],
  ];

  const startOfCurrentMonth = startOfMonth(currentMonth);
  const endOfCurrentMonth = endOfMonth(currentMonth);

  const days = [];

  // Push dates in the current month to the "days" array
  let currentDate = startOfCurrentMonth;
  while (currentDate <= endOfCurrentMonth) {
    days.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

 
 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveEvent = () => {
    // ทำสิ่งที่คุณต้องการกับข้อมูลกิจกรรมที่ถูกบันทึก
    // เช่น ส่งไปยังเซิร์ฟเวอร์หรือเก็บในสถานะอื่น
    // ตามความเหมาะสม
    // หลังจากนั้นปิดโมดัล
    closeModal();
  };

  return (
    <div className="App">
      <div className="header">
      <NavLink to="/"><img src="ringht.arrow.png" alt="โลโก้" className="profile" /></NavLink>
        <h1>October</h1>
        <NavLink to="/N"><img src="left.arrow.png" alt="โลโก้" className="profile" /></NavLink>
        <a href='https://www.northbkk.ac.th/'><img src="logo.png" alt="โลโก้" className="logo" /></a>
        <NavLink to="/risk"><img src="icon_one.png" alt="โลโก้" className="profile" /></NavLink>
        <img src="profile.png" alt="โลโก้" className="profile" />
      </div>

      <div>
      <table>
        <thead>
          <tr>
            {daysn.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      <div>
        <div className="plas"><button onClick={openModal}><img src="plus.png" alt="โลโก้" className="plas" /></button></div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>เพิ่มกิจกรรม</h2>
            <form>
              <label htmlFor="eventName">ชื่อกิจกรรม:</label>
              <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />

              <label htmlFor="eventType">ประเภทกิจกรรม:</label>
              <select id="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option value="1">บัดทัดที่ 1</option>
                <option value="2">บัดทัดที่ 2</option>
                <option value="3">บัดทัดที่ 3</option>
              </select>

              <label htmlFor="startDate">วันที่เริ่ม:</label>
              <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

              <label htmlFor="endDate">วันที่สิ้นสุด:</label>
              <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

              <label htmlFor="namemaster">จัดโดย:</label>
              <textarea id="namemaster" value={namemaster} onChange={(e) => setNameMaster(e.target.value)} />

              <label htmlFor="description">รายละเอียด:</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

              <div className="modal-buttons">
                <button onClick={saveEvent}>บันทึก</button>
                <button onClick={closeModal}>ยกเลิก</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainIndexT;
