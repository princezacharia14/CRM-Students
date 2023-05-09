import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './table-container.css';

const Table = () => {
//To access data dynamically
    const [data, setData] = useState([])

    //to store input field for the form
    const [courseName, setCourseName] = useState('');
    const [courseDate, setCourseDate] = useState('');
    const [courseTime, setCourseTime] = useState('');
    const [updateCourseName, setUpdateCourseName] = useState('');
    const [updateCourseDate, setUpdateCourseDate] = useState('');
    const [updateCourseTime, setUpdateCourseTime] = useState('');
    const [editId, setEditId] = useState(-1);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const id = data[data.length - 1] + 1;
        const id = data.length + 1;
        await axios.post('http://localhost:3000/users', {id: id, courseName: courseName, courseDate: courseDate, courseTime: courseTime})
        .then(res => {
            // console.log(res)
            window.location.reload();   //to refresh or reload the page automatically
        })
        .catch(err => console.log(err))
    } 


    const handleEdit = async (id) => {
        await axios.get('http://localhost:3000/users/'+id)
        .then(res =>{
            updateCourseName(res.data.courseName)
            updateCourseDate(res.data.courseDate)
            updateCourseTime(res.data.courseTime)
        })
        .catch(err => console.log(err));
        setEditId(id)

    }    

    const handleUpdate = async () => {
        await axios.put('http://localhost:3000/users/' + editId, {id: editId, courseName: setCourseName, courseDate: setUpdateCourseDate, courseTime: setCourseTime})
        .then(res => {
            console.log(res);
            window.location.reload();
            setEditId(-1);
        })
        .catch(err => console.log(err));
    }

    const handleDelete = async (id) => {
        await axios.delete('http://localhost:3000/users/'+id)
        .then(res =>{
           window.location.reload();
        })
        .catch(err => console.log(err));
        setEditId(id)
    }

  return (
    <div className='table-container'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label className="height">Enter Course</label>
                <input 
                    type="text" 
                    placeholder='Enter Course Name'
                    onChange={e => setCourseName(e.target.value)}
                
                />
                </div>

                <div className="form-group">
                <label className="height">Enter Course Date</label>
                <input 
                    type='date'
                    placeholder='Enter Date'
                    onChange={e => setCourseDate(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label className="height">Enter Course Time</label>
                <input
                    type='time'
                    placeholder='Enter time' 
                    onChange={e => setCourseTime(e.target.value)}
                />
                </div>

                {/* <button type='button' className="btn btn-primary btn-block height">Add</button> */}
                <button>Add</button>
            </form>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Course Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user, index) => (
                        user.id === editId ? 
                        <tr>
                            <td>{user.id}</td>
                            <td><input type='text' value={updateCourseName} onChange={e => setUpdateCourseName(e.target.value)}/></td>
                            <td><input type='date' value={updateCourseDate} onChange={e => setUpdateCourseDate(e.target.value)}/></td>
                            <td><input type='time' value={updateCourseTime} onChange={e => setUpdateCourseTime(e.target.value)}/></td>
                            <td><button onClick={handleUpdate}>Update</button></td>
                        </tr>
                        :
                        <tr key={index}> 
                            <td>{user.id}</td>
                            <td>{user.courseName}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table