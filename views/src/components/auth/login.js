import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from "axios";
import Home from "../schedule/home";
import Table from "../schedule/Table";

function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //1st useEffect to set the focus when the first time components loads in the dependency array
    useEffect(() => { 
        userRef.current.focus();
    }, [])

    //2nd useEffect is to empty out any error msg that we might have if the user changes the user state or the password state
    useEffect(() => {
        setErrMsg('');
    }, [userEmail, userPassword])
    

    const handleSubmit = async e => {
        e.preventDefault();
        
        const data = {
            email: userEmail,
            password: userPassword
        };

        try {
            const response = await axios.post('/login', data)
            setUserEmail('');
            setUserPassword('');
            setSuccess(true);
        } catch (error) {
            if(!error?.response){
                setErrMsg('No Server Response')
            }else if(error.response?.status === 400){
                setErrMsg('Not valid username or password')
                // setErrMsg('Missing username or password')
            }
            else if(error.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

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
            <>
            {success ? (
              <section>
                <h1>Hello {setUserEmail}</h1>
                <h1>Successfully logged in! </h1>
                
                <br />
                <p>
                  {/* <a href="#">Go to Home</a> */}
                  <Link to={'/table'}>Add Courses</Link>
                  {/* <BrowserRouter>
                  <Routes>
                  <Route exact path="/table" Component={Table} />
                  </Routes>  
                  </BrowserRouter> */}
                </p>
              </section>
            ) : (
                <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live = "assertive">{errMsg}</p>
                <form onSubmit={handleSubmit}>
                
                <h3>Login</h3>

                <div className="form-group">
                    <label className="height">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        autoComplete="off"
                        className="form-control height" placeholder="Email"
                        ref={userRef}
                        onChange={e => setUserEmail(e.target.value)}
                        value={userEmail} //To clear the input fields on submission
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
                        // ref={userRef}
                        onChange={e => setUserPassword(e.target.value)} 
                        value={userPassword}
                        // required
                    />
                </div>

                <button>Login</button>
                {/* <Link to={'/'}><button type="button" className="btn btn-primary btn-block height">Login</button></Link> */}
                <p className="forgot-password text-right">
                    <Link to={'/forgot'}>Forgot password?</Link>
                </p>
                <p>
                    Need an Account <br />
                    <span>
                    <Link to={'/register'}>Register</Link>
                    </span>
                </p>
            </form>
            </section>
            )}
            </>
       )}
   
export default Login;
