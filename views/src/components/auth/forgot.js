import React, { Component, useState } from "react";
import axios from "axios";

const Forgot = () => {
    const [userEmail, setUserEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.email
        };

        axios.post('forgot', data).then (
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )

    }
        return(
        <form onSubmit={handleSubmit} method="post">
           
            <h3>Forgot Password</h3>

            <div className="form-group">
                <label className="height">Email</label>
                <input type="email" className="form-control height" placeholder="Email"
                onChange={e => setUserEmail(e.target.value)}
                value={userEmail}
                />
            </div>


            <button type="button" className="btn btn-primary btn-block height">Submit</button>
        
        </form>
    )

}


export default Forgot