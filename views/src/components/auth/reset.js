import React, { Component, state } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Reset = () => {

const handleSubmit = e => {
    // state = {};
    e.preventDefault();

    const data = {
        token: this.props.match.params.id,
        password: this.password,
        password_confirm: this.password_confirm
    };

    axios.post('reset', data).then(
        res => {
            console.log(res)
            // this.setState({
            //     reset: true
            // })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
};

// if(this.state.reset){
//     return <Navigate to ={'/login'} />
// }

    return(
        <form onSubmit={handleSubmit} method="post">
            {/* {error} */}

            <h3>Reset Password</h3>


            <div className="form-group">
                <label className="height">Password</label>
                <input type="password" className="form-control height" placeholder="Password"
                // onChange={e => setUserPassword(e.target.value)} 
                />
            </div>

            <div className="form-group">
                <label className="height">Confirm Password</label>
                <input type="password" className="form-control height" placeholder="Password Confirm"
                // onChange={e => setUserConfirmPassword(e.target.value)} 
                />
            </div>

            <button type="button" className="btn btn-primary btn-block height">Submit</button>
           
        </form>
    )

}

export default Reset