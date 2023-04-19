import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/schedule/home';
import Nav from './components/nav';
import Login from './components/auth/login';
import Register from './components/auth/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';



export default class App extends Component {
  state= {};

//   componentDidMount = () => {
//     axios.get(' http://localhost:4111').then(
//         res => {
//            this.setState({
//             User: res.data
//            });
//         },
//         err => {
//             console.log(err);
//         }
//     )
// };

  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav user={this.state.user} />

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" Component={() => <Home user={this.state.user} />} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />  
            {/* <Route exact path="/forgot" Component={Forgot} />
            <Route exact path="/reset" Component={Reset} /> */}
          </Routes>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
}