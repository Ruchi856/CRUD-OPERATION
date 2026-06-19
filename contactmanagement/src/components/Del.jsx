import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Del() {
  const { id } = useParams(); 
  const go = useNavigate();

  const handleDelete = () => {    
    axios.delete(`http://localhost:3000/Students/${id}`)      
        go('/delete');
      }
  

  const handleCancel = () => {
    go('/delete'); 
  };

  return (
    <div style={{ padding: '200px', textAlign: 'center' }}>
      <h2>Are you sure you want to delete this student (ID: {id})?</h2>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={handleDelete} 
          style={{ marginRight: '15px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
          Yes, Delete
        </button>
        <button 
          onClick={handleCancel} 
          style={{ padding: '10px 20px', backgroundColor: 'gray', color: 'white', border: 'none', cursor: 'pointer' }}>
          No, Cancel
        </button>
      </div>
    </div>
  );
}

export default Del;
