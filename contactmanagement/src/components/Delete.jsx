import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Delete() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Students')
      .then((response) => {
        setStudents(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching data with axios:', error);
      });
  }, []);


    const list = students.map(student =>

      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.course}</td>
        <td>{student.mobile}</td>
        <td>
        <Link to={`/Del/${student.id}`} className="Delete-link">
          Delete
        </Link>
        </td>
        

      </tr>
      )


  
  return (
    <div>
      <h1 className="title">Delete Contact</h1>
      
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>          
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default Delete
