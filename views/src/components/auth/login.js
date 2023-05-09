import React from "react";
import { useState } from 'react';
import { Link  } from 'react-router-dom';
import axios from "axios";
import Home from "../schedule/home";

function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    

    const handleSubmit = async e => {
        e.preventDefault();
        
        const data = {
            email: userEmail,
            password: userPassword
        };

        console.log(data);

        await axios.post('/login', data).then(
            res => {
                console.log(res.data)
                
            }
        ).catch(
            err => {
                console.log(err)
               
            }
        )
    };
        return(
        
                <form onSubmit={handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label className="height">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        autoComplete="off"
                        className="form-control height" placeholder="Email"
                        onChange={e => setUserEmail(e.target.value)}
                        // value={userEmail}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="height">Password</label>
                    <input 
                        type="password"
                        id="password"
                        className="form-control height" 
                        placeholder="Password"
                        onChange={e => setUserPassword(e.target.value)} 
                        // value={userPassword}
                        required
                    />
                </div>

                <button>Login</button>
                {/* <Link to={'/'}><button type="button" className="btn btn-primary btn-block height">Login</button></Link> */}
                <p className="forgot-password text-right">
                    <Link to={'/forgot'}>Forgot password?</Link>
                </p>
                <span>
                    Need an Account <br />
                    <Link to={'/register'}>Register</Link>
                </span>
            </form>
           
       )}
   
export default Login;
