import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import './table-container.css';
import EditAbleRow from './EditAbleRow';
import ReadOnlyRow from './ReadOnlyRow';

const Table = () => {
//To access data dynamically
    const [data, setData] = useState([]);
    const [courseId, setCourseId] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    //to store input field for the form

    
    const [courseName, setCourseName] = useState('');
    const [courseDate, setCourseDate] = useState('');   
    const [courseTime, setCourseTime] = useState('');

    const [updateCourseName, setUpdateCourseName] = useState('');
    const [updateCourseDate, setUpdateCourseDate] = useState('');
    const [updateCourseTime, setUpdateCourseTime] = useState('');
    const [id, setId] = useState();
    

    useEffect(() => {
        axios.get('http://localhost:4111/coop', json => setData(json.data))
        .then(res => setData(res.data.data))
        .catch(err => console.log(err));
    }, [data])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await axios.get('http://localhost:4111/coop');
    //         setData(data);
    //     };
    //     fetchData();
    // },[data])
    // console.log(data);

    const addCourseValues = {
        courseName: courseName, 
        courseDate: courseDate, 
        courseTime: courseTime
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const id = data[data.length - 1] + 1;
        const id = data.length + 1;
        await axios.post('http://localhost:4111/coop' , addCourseValues)
        .then(res => { console.log(res);
        
            // window.location.reload();   //to refresh or reload the page automatically
        })
        .catch(err => console.log(err))
    } 

    const handleEdit = (id) => {
        setIsOpen(!isOpen)
        setCourseId(id)
        // axios.get(`http://localhost:4111/coop/${id}`, json => setData(json.data))
        // .then(res => {
        //     console.log(res.data)
        //     setUpdateCourseName(res.data[0].courseName)
        //     setUpdateCourseDate(res.data[0].courseDate)
        //     setUpdateCourseTime(res.data[0].courseTime)

        //     window.location.reload();
        // })
        // .catch(err => console.log(err));
        //     setId(id)
        
        }    

    const handleUpdate = (id) => {
        
        axios.put(`http://localhost:4111/coop/${id}`, {id: setId, courseName: updateCourseName, courseDate: updateCourseDate, courseTime: updateCourseTime})
        .then(res => {

            setData((prevItem) => prevItem.map((item) => (item.id === id ? setId : item)))
            console.log(res.data);
            window.location.reload();
            
        }).catch(err => console.log(err))
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4111/coop/${id}`)
        .then(res =>{
            console.log(res);
           setData(data.filter((item) => item._id !== id));
           
        })
        .catch(err => console.log(err));
        setId(id)
    }

    const renderTable = () => {
        return data.map(user => {
            return (
                <tr>
                    <td>{user.courseName}</td>
                    <td>{user.courseDate}</td>
                    <td>{user.courseTime}</td>
                </tr>
            )
        })
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
                    // requried pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                    onChange={e => setCourseDate(e.target.value.toLocaleString("en-US", {day: "2-digit"}))}
                    // onChange = {e => setUpdateCourseDate(e.target.value = new Date().toISOString().substring(0, 12))}
                    
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
                <button onClick={renderTable}>Add Course</button>
            </form>
        </div>

        <table id='users'>
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
                    data.map((user, id) => (
                        user.id === id ? 
                        <tr>
                            <td>
                              {user.id}
                            </td>
                            <td>
                                <input 
                                    type='text' 
                                    value={updateCourseName} 
                                    onChange={e => setUpdateCourseName(e.target.value)}
                                 />
                            </td>
                            <td>
                                <input 
                                    type='date' 
                                    value={updateCourseDate} 
                                    // onChange={e => setUpdateCourseDate(e.target.value.toLocaleString("en-US", {day: "2-digit"}))}
                                    onChange = {e => setUpdateCourseDate(e.target.value = courseDate.getFullYear() + " " + (courseDate.getMonth() + 1) + "/" + courseDate.getDate())}
                                    
                                />
                            </td>
                            <td>
                                <input type='time' 
                                value={updateCourseTime} 
                                onChange={e => setUpdateCourseTime(e.target.value)}
                            />
                            </td>
                            <td>
                                <button onClick={() => handleUpdate(user._id)}>Update</button>
                                {/* <button>Update</button> */}
                            </td>
                        </tr>
                        :
                        <tr key={id}>
                          <td>{user.id}</td>

                          {isOpen && courseId === user._id && <EditAbleRow users={user} />}
                            
                             
                             <td>{user.courseName}</td>
                             <td>{user.courseDate}</td>
                             <td>{user.courseTime}</td>
                             <td>
                                 <button onClick={() => handleEdit(user._id)}>Edit</button>
                                 <button onClick={() => handleDelete(user._id)}>Delete</button>
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



// Correct Code



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import './table-container.css';
// import { json } from 'react-router-dom';

// const Table = () => {
// //To access data dynamically
//     const [data, setData] = useState([]);

//     //to store input field for the form

    
//     const [courseName, setCourseName] = useState('');
//     const [courseDate, setCourseDate] = useState('');   
//     const [courseTime, setCourseTime] = useState('');
//     const [id, setId] = useState(-1);
    

//     useEffect(() => {
//         axios.get('http://localhost:4111/coop', json => setData(json.data))
//         .then(res => setData(res.data.data))
//         .catch(err => console.log(err));
//     }, [data])

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const res = await axios.get('http://localhost:4111/coop');
//     //         setData(data);
//     //     };
//     //     fetchData();
//     // },[data])
//     // console.log(data);

//     const addCourseValues = {
//         courseName: courseName, 
//         courseDate: courseDate, 
//         courseTime: courseTime
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // const id = data[data.length - 1] + 1;
//         const id = data.length + 1;
//         await axios.post('http://localhost:4111/coop' , addCourseValues)
//         .then(res => { console.log(res);
        
//             // window.location.reload();   //to refresh or reload the page automatically
//         })
//         .catch(err => console.log(err))
//     } 


//     const handleEdit = async (id) => {
//         await axios.get('http://localhost:4111/coop' , data)
//         .then(res =>{
//             courseName(res.data.courseName)
//             courseDate(res.data.courseDate)
//             courseTime(res.data.courseTime)
//         })
//         .catch(err => console.log(err));
//         setId(id)

//     }    

//         const handleUpdate = async (itemId, updatedItem) => {
//         try {
//             // Send the updated item to the server
//             await axios.put('http://localhost:4111/coop/${id}', updatedItem);
    
//             // Update the state with the edited item
//             setData((prevItems) =>
//             prevItems.map((item) => (item.id === id ? updatedItem : item))
//             );
//         } catch (error) {
//             console.log(error);
//         }
//         };

//     // const handleUpdate = async (itemId, updatedItem) => {
//     // try {
//     //     // Send the updated item to the server
//     //     await axios.put(`http://localhost:4111/items/${itemId}`, updatedItem);

//     //     // Update the state with the edited item
//     //     setData((prevItems) =>
//     //     prevItems.map((item) => (item.id === itemId ? updatedItem : item))
//     //     );
//     // } catch (error) {
//     //     console.log(error);
//     // }
//     // };

//     // const handleUpdate = async () => {
//     //     await axios.put(`http://localhost:4111/coop/${id}` +id, { courseName: setCourseName, courseDate: setCourseDate, courseTime: setCourseTime})
//     //     .then(res => {
//     //         console.log(res);
//     //         window.location.reload();
//     //         setId(-1);
//     //     })
//     //     .catch(err => console.log(err));
//     // }

//     const handleDelete = async (id) => {
//         await axios.delete(`http://localhost:4111/coop/${id}`)
//         .then(res =>{
//            setData(data.filter((item) => item._id !== id));
//         })
//         .catch(err => console.log(err));
//         setId(id)
//     }


//     const renderTable = () => {
//         return data.map(user => {
//             return (
//                 <tr>
//                     <td>{user.courseName}</td>
//                     <td>{user.courseDate}</td>
//                     <td>{user.courseTime}</td>
//                 </tr>
//             )
//         })
//     }


//   return (
//     <div className='table-container'>
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                 <label className="height">Enter Course</label>
//                 <input 
//                     type="text" 
//                     placeholder='Enter Course Name'
//                     onChange={e => setCourseName(e.target.value)}
                
//                 />
//                 </div>

//                 <div className="form-group">
//                 <label className="height">Enter Course Date</label>
//                 <input 
//                     type='date'
//                     placeholder='Enter Date'
//                     onChange={e => setCourseDate(e.target.value)}
//                 />
//                 </div>

//                 <div className="form-group">
//                 <label className="height">Enter Course Time</label>
//                 <input
//                     type='time'
//                     placeholder='Enter time' 
//                     onChange={e => setCourseTime(e.target.value)}
//                 />
//                 </div>

//                 {/* <button type='button' className="btn btn-primary btn-block height">Add</button> */}
//                 <button onClick={renderTable}>Add Course</button>
//             </form>
//         </div>
//         <table id='users'>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Course Name</th>
//                     <th>Date</th>
//                     <th>Time</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/* <tr>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                 </tr> */}
               
//                 {
//                 // renderTable()
//                         // data.map((user, index)=> (
//                         //     <tr key={index}>
//                         //         <td>{user.id}</td>
//                         //         <td>{user.courseName}</td>
//                         //         <td>{user.courseDate}</td>
//                         //         <td>{user.courseTime}</td>
//                         //     </tr>
//                         // ))
                   

//                     data?.map((user, id) => (
//                         user.id === id ? 
//                         <tr>
//                             <td>{user.id}</td>
//                             <td><input type='text' value={setCourseName} onChange={e => setCourseName(e.target.value)}/>{user.courseName}</td>
//                             <td><input type='date' value={setCourseDate} onChange={e => setCourseDate(e.target.value)}/>{user.courseDate}</td>
//                             <td><input type='time' value={setCourseTime} onChange={e => setCourseTime(e.target.value)}/>{user.courseTime}</td>
//                             {/* <td><button onClick={handleUpdate}>Update</button></td> */}
//                         </tr>
//                         :
//                         <tr key={id}> 
//                             <td>{user.id}</td>
//                             <td>{user.courseName}</td>
//                             <td>{user.courseDate}</td>
//                             <td>{user.courseTime}</td>
//                             <td>
//                                 <button onClick={() => handleUpdate(user._id)}>Edit</button>
//                                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default Table
