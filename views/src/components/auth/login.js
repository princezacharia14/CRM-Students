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