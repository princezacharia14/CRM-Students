import React from 'react'
import Table from './Table'

const addCourse = () => {
  return (
    <div className="table-container">
        <Table />
        <label htmlFor="courseName">Course Name</label>
        <input 
            type="text" 

        />
    </div>
  )
}

export default addCourse