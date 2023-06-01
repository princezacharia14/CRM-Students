import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EditAbleRow = (props) => {
  const {users} = props;
  // const {_id, courseName} = users
  // console.log(_id)

  const [data, setData] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDate, setCourseDate] = useState('');   
  const [courseTime, setCourseTime] = useState('');
  const [id, setId] = useState();

  useEffect(() => {
    setCourseName(users.courseName)
  }, [])


   const handleUpdate = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:4111/coop/${users._id}`, {id: setId, courseName: courseName, courseDate: courseDate, courseTime: courseTime})
        .then(res => {
          console.log(res.data);
            setData((prevItem) => prevItem.map((item) => (item.id === id ? setId : item)))
           
            window.location.reload();
            
        }).catch(err => console.log(err))
        setId(id)
      }

  return (
    <tr>
        <td>
          <form onSubmit={handleUpdate}>
          <td>
            <input 
            type="text" 
            required="required"
            placeholder='Enter Course Name'
            name="courseName" 
            value={courseName}
            onChange={e => setCourseName(e.target.value) }
            />
        </td>
        <td>
        <input 
            type="date" 
            required="required"
            placeholder='Enter Course Date'
            name="courseDate" 
            value={courseDate}
            onChange={e => setCourseDate(e.target.value)}
            />
        </td>
        <td>
        <input 
            type="time" 
            required="required"
            placeholder='Enter Course Time'
            name="courseTime" 
            value={courseTime}
            onChange={e => setCourseTime(e.target.value)}
            />
        </td>
        <td>
          <button>Save</button>
        </td>
          </form>
        </td>
  </tr>
  )
}

export default EditAbleRow