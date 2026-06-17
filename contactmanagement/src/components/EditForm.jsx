import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom';

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
  });


  useEffect(() => {
    axios.get(`http://localhost:3000/Students/${id}`)
      .then((response) => {
        setStudent(response.data); 
      })
      .catch((error) => {
        console.log( error);
      });
  }, [id]);

  // const handleUpdate = () => {      
  //   axios.put(`http://localhost:3000/Students/${id}`, student)
  //     .then(() => {
  //       navigate('/update'); 
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  
  const update = () => {      
    axios.put(`http://localhost:3000/Students/${id}`, student)
        
        navigate('/update');
      } 
  

  return (
    <div>
      <h1 className='title'>Update Contact</h1>

      <div className='box'>
        <input
          type="text"
          placeholder='Enter User Name'
          value={student.name || ''}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />

        <input
          type="email"
          placeholder='Enter User Email'
          value={student.email || ''}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />

        <input
          type="text"
          placeholder='Enter User Course'
          value={student.course || ''}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        />

        <input
          type="text"
          placeholder='Enter User Mobile'
          value={student.mobile || ''}
          onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
        />


        <button onClick={update}>Update</button> 
      </div>      
    </div>
  );
} 

export default EditForm;
