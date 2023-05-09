import React, { useState } from "react";
import axios from "axios";
// // import posts from "../../../API/posts";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from '../../config.json';
import { Navigate } from "react-router-dom";


function Register() {
    const [userFirstName, setUserFirstName] = useState("")
    const [userLasttName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userConfirmPassword, setUserConfirmPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            firstName: userFirstName,
            lastName: userLasttName,
            email: userEmail,
            password: userPassword,
            confirmPassword: userConfirmPassword
        };

        console.log(data)

        // axios.post(`http:/localhost:4111/register`, {
        //     userFirstName,
        //     userLasttName,
        //     userEmail,
        //     userPassword,
        //     userConfirmPassword
        // })

        await axios.post('http://localhost:4111/register', data).then(
            res => {
                console.log(res);
                
            }
        ).catch(
            err => {
                console.log(err)
            }
        )

    };

    return (
        <form onSubmit={handleSubmit}>
            {/* {error} */}
            <h3>Sign Up</h3>

            <div className="form-group">
                <label className="height">First Name</label>
                <input
                    type="text"
                    className="form-control height"
                    placeholder="First Name"
                    onChange={e => setUserFirstName(e.target.value)}
                    value={userFirstName}
                />
            </div>

            <div className="form-group">
                <label className="height">Last Name</label>
                <input
                    type="text"
                    className="form-control height"
                    placeholder="Last Name"
                    onChange={e => setUserLastName(e.target.value)}
                    value={userLasttName}
                />
            </div>

            <div className="form-group">
                <label className="height">Email</label>
                <input
                    type="email"
                    className="form-control height"
                    placeholder="Email"
                    onChange={e => setUserEmail(e.target.value)}
                    value={userEmail}
                />
            </div>

            <div className="form-group">
                <label className="height">Password</label>
                <input
                    type="password"
                    className="form-control height"
                    placeholder="Password"
                    onChange={e => setUserPassword(e.target.value)}
                    value={userPassword}
                />
            </div>

            <div className="form-group">
                <label className="height">Confirm Password</label>
                <input type="password"
                    className="form-control height"
                    placeholder="Confirm Password"
                    onChange={e => setUserConfirmPassword(e.target.value)}
                    value={userConfirmPassword}
                />
            </div>

            <div className="form-group">
                {/* <button type="button" className="btn btn-primary btn-block height">Sign Up</button> */}
                <button>Sign Up</button>
            </div>

        </form>
    )

}

export default Register;