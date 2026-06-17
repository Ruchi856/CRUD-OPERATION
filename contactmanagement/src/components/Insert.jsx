import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Insert() {
  
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
  });

  const go = useNavigate();

  
  const insert = () => {      
    axios.post("http://localhost:3000/Students", student)
        
        go('/view');
      }  
      
   

  
  return (
    <div>
      <h1 className='title'>Insert Contact</h1>

      <div className='box'>
        <input
          type="text"
          placeholder='Enter User Name'
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />

        <input
          type="email"
          placeholder='Enter User Email'
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />

        <input
          type="text"
          placeholder='Enter User Course'
          value={student.course}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        />

        <input
          type="text"
          placeholder='Enter User Mobile'
          value={student.mobile}
          onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
        />

        <button onClick={insert}>Insert</button>
      </div>      
    </div>
  );
} 

export default Insert;
