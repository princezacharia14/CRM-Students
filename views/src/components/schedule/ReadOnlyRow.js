import React, { useState } from 'react'

const ReadOnlyRow = ({ user }) => {
  
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.courseName}</td>
      <td>{user.courseDate}</td>
      <td>{user.courseTime}</td>
    </tr>
  )
}

export default ReadOnlyRow



// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReadOnlyRow = ({ user }) => {
//   const [courseName, setCourseName] = useState('');
//     const [courseDate, setCourseDate] = useState('');   
//     const [courseTime, setCourseTime] = useState('');
//     const [id, setId] =useState();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       axios.get('http://localhost:4111/coop', json => setData(json.data))
//       .then(res => setData(res.data.data))
//       .catch(err => console.log(err));
//   }, [data])
    
//       const handleEdit = e => {
//         axios.get(`http://localhost:4111/coop/${id}`, data)

//        const onChangeData = (e, id) => {
//            const { name, value } = e.target

//            const editData = data.map((item) => item.id === id && name ? {...item, [name] : value } : item )

//            setData(editData)
//        }
//       }
//   return (
//     <tr> 
//     <td>
//                                 <input 
//                                     type='text' 
//                                     value={user.courseName} 
//                                     onChange={e => setCourseName(e.target.value)}
//                                  />{handleEdit}
//                             </td>
//                             <td>
//                                 <input 
//                                     type='date' 
//                                     value={user.courseDate} 
//                                     onChange={e => setCourseDate(e.target.value)}
//                                 />{handleEdit}
//                             </td>
//                             <td>
//                                 <input type='time' 
//                                 value={user.courseTime} 
//                                 onChange={e => setCourseTime(e.target.value)}
//                             />{handleEdit}
//                             </td>
//                             <td>
//                                 <button onClick={() => handleEdit(user._id)}>Edit</button>
//                                 {/* <button onClick={() => handleDelete(user._id)}>Delete</button> */}
//                             </td>
                                
       
//     </tr>
//   )
// }

// export default ReadOnlyRow
