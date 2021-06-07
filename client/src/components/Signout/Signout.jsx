import React, { Component } from 'react'
import '../Signout/Signout.css';
export default class Signout extends Component {
 
 logout = () => {
    localStorage.clear();
    // you can also like localStorage.removeItem('Token');
    window.location.href = "/login";
  }
 
  render() {
    return (
      <button onClick={this.logout} className="SignOut">Signout</button>
    )
  }
}
 