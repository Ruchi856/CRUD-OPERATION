import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Card() {
    const [student, setStudent] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/Students/${id}`)
            .then(res => {
                setStudent(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  
 return (
  <div>
      <h1 className='title'>Card</h1>
    <div className='card'>
      <hr />
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Mobile:</strong> {student.mobile}</p>
      <br />
      <Link to="/SingleView">Back</Link>
    </div>
  </div>
  );
}

export default Card;