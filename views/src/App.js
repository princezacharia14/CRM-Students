import React, { Component, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/schedule/home';
import Nav from './components/nav';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Forgot from './components/auth/forgot';
import Reset from './components/auth/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Table from './components/schedule/Table';



export default class App extends Component {
  state= {};
  

//   componentDidMount = () => {
//     axios.get('/').then(
//         res => {
//            this.setState({
//             user: res.data
//            });
//         },
//         err => {
//             console.log(err);
//         }
//     )
// };

  render() {

  // function App() {

  return (
    
    <BrowserRouter>
    <div className="App">
      {/* <Nav user={this.state.user} /> */}
        <Nav />
        {/* <Table /> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" Component={() => <Home user={this.state.user} />} />
            {/* <Route exact path="/" Component={() => <Home  />} /> */}
            <Route exact path="/login" Component={Login} />
            <Route exact path="/" Component={Home}/>
            <Route exact path="/register" Component={Register} />  
            <Route exact path="/forgot" Component={Forgot} />
            <Route exact path="/reset" Component={Reset} />
            <Route exact path="/table" Component={Table} />
          </Routes>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
}

// export default App;