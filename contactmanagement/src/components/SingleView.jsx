import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function SingleView() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Students')
            .then(res => {
                setStudents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const list = students.map(student =>
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.mobile}</td>
            <td><Link to={`/card/${student.id}`}> View </Link></td>
        </tr>
    )
    return (
        <div>
            <hr />
            <h2 className='title'>Student Data View</h2>
            <hr />
            <table className='student-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SingleView