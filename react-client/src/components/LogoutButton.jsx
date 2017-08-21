import React from 'react';
import axios from 'axios';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.logoutFunc = this.logoutFunc.bind(this);
  }

  //set the state of Auth to false from database req.isAuthenticated
  logoutFunc(e) {
    e.preventDefault();
    axios.get('/users/logout')
    .then((res)=>{
      this.props.resetLoginForm();
      this.props.setAuth(res.data[1]);
      this.props.setuserId(res.data[0]);
    }).catch((err)=>{
      console.log(err);
    });
  }

  render() {
    return (
        <button className="logoutButton" onClick={(event)=>{this.logoutFunc(event)}}>Logout</button>
    );
  }
}

export default LogoutButton;
