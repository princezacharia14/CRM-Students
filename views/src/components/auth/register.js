import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component{
    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };

        axios.post('register', data).then(
            res => {
                console.log(res)
            }
        ).catch(
           err => {
               this.setState({
                message: err.response.data.message
               })
            }
        )
    };



    render() {
        let error = '';
        if(this.state.message){
            error = (
                <div className="aler alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
        return(
            <form onSubmit={this.handleSubmit}>
                {error}
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="height">First Name</label>
                    <input type="text" className="form-control height" placeholder="First Name"
                    onChange={e => this.firstName = e.target.value} />
                </div>

                <div className="form-group">
                    <label className="height">Last Name</label>
                    <input type="text" className="form-control height" placeholder="Last Name"
                    onChange={e => this.lastName = e.target.value} />
                </div>

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

                <div className="form-group">
                    <label className="height">Confirm Password</label>
                    <input type="password" className="form-control height" placeholder="Confirm Password"
                    onChange={e => this.confirmPassword = e.target.value} />
                </div>

                <div className="form-group">
                <button className="btn btn-primary btn-block height">Sign Up</button>
                </div>

            </form>
        )
    }
}