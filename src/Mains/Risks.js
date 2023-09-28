import React from 'react';
import './MainST.css';
import {NavLink} from "react-router-dom";

function Risk() {
  const studentData = [
    { id: 1, studentID: '001', firstName: 'John', lastName: 'Doe', major: 'Computer Science', riskLevel: 'Low' },
    { id: 2, studentID: '002', firstName: 'Jane', lastName: 'Smith', major: 'Electrical Engineering', riskLevel: 'Medium' },
    { id: 3, studentID: '003', firstName: 'Alice', lastName: 'Johnson', major: 'Mechanical Engineering', riskLevel: 'High' },
    // Add more student data here
  ];

  return (
    <div className="App">
      <div className="header">
        <img src="logo.png" alt="โลโก้" className="logo" />
        <NavLink to="/"><img src="icon_one.png" alt="โลโก้" className="profile" /></NavLink>
        <img src="profile.png" alt="โลโก้" className="profile" />
      </div>
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>รหัสนักศึกษา</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>สาขา</th>
              <th>ความเสี่ยง</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.studentID}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.major}</td>
                <td>{student.riskLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Risk;
