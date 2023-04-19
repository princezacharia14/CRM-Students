// import React from 'react'
// import { useRef, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';


// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSubmit = async(e) => {
//       e.preventDefault();
//       console.log(user, pwd);
//       setUser('');
//       setPwd('');
//       setSuccess(true);

//     }

//   return (
//     <>
//     {success ? (
//       <section>
//         <h1>You are logged in!</h1>
//         <br />
//         <p>
//           <a href="#">Go to Home</a>
//         </p>
//       </section>
//     ) : (

//     <section>
//         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live = "assertive">{errMsg}</p>
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input 
//           type="email" 
//           id="username"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUser(e.target.value)}
//           value={user}
//           required
//           /><br /><br/>

//           <label htmlFor="password">Password:</label>
//           <input
//           type="password" 
//           id="password"
//           onChange={(e) => setPwd(e.target.value)}
//           value={pwd}
//           required
//           /><br /><br/>

//           <button>Sign In</button>
//         </form>
//         <p>
//           Need an Account? <br />
//           <span>
//             <Link to={'/register'}>Sign Up</Link>
//           </span>
//         </p>


//     </section>
//     )}
//     </>
//   )
// }

// export default Login


import axios from "axios";
import React, { Component } from "react"
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default class Login extends Component{
    state ={};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        };

        axios.post('login', data)
        .then( res => {
            localStorage.setItem('token', res.data.token)  
            this.setState({
                loggedIn: true
            });  
        })
        .catch(err => {
            this.setState({
                message: err.response.data.message
            })
        })
    };

    render() {
        if(this.state.loggedIn){
            return <Navigate to = {'/'} />
        }

        let error = '';
        if(this.state.message){
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
        return(
            <form onSubmit={this.handleSubmit}>
                {error}

                <h3>Login</h3>

                <div className="form-group">
                    <label className="height">Email</label>
                    <input type="email" className="form-control height" placeholder="Email"
                    onChange={e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label className="height">Password</label>
                    <input type="password" className="form-control height" placeholder="Password"
                    onChange={e => this.password = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block height" >Login</button>
                <p className="forgot-password text-right">
                    <Link to={'/forgot'}>Forgot password?</Link>
                </p>
            </form>
        )

    }

}