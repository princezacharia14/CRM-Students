import axios from "axios"
import React, { Component } from "react"
// import './table-container.css'

// const Home = (props) =>{


//     return (
//        <div>
//             <h2>Welcome</h2>
//        </div>
//     )
// }

// export default Home


function Home(){
    
    return(
    <div className="table-container">
        <h1>Welcome..</h1>
        {/* <table>
            <thead>
            <tr>
                <th>Course Name</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Front End</td>
                <td>April 1</td>
                <td>10.00 AM</td>
            </tr>
            <tr>
                <td>Back End</td>
                <td>April 14</td>
                <td>10.00 AM</td>
            </tr>
            <tr>
                <td>Web Dev</td>
                <td>April 10</td>
                <td>10.00 AM</td>
            </tr>
            </tbody>
        </table> */}

        <button type="button" className="btn btn-primary">Add Course</button>
    </div>
    )
}
        
export default Home;

// export default class Home extends Component{
//     constructor(props){
//         super(props);
//     }

   

// state = {};

// componentDidMount() {
    

//     axios.get('user').then(
//         res => {
//             this.setState({
//                 user: res.data
//             });
//         },
//         err => {
//             console.log(err)
//         }
//     )
// }


//     render() {
//         if(this.props.user){
//         return(
//             <h2>Hi {this.props.user.firstname} {this.props.user.lastname}</h2>
//         )
//         }
//         return(
//             <h2>You are not logged in!</h2>
//         )
//     }

// }