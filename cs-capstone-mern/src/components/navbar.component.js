import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../custom.css"

export default class Navbar extends Component {
// Provide links to urls with corresponding link name
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Sleep Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createSleepGoal" className="nav-link">Create Sleep Goal</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createSleepJournal" className="nav-link">Create Sleep Journal</Link>
          </li>
          <li className="navbar-item">
          <Link to="/NasaImage" className="nav-link">Space Images</Link>
          </li>
          <li className="navbar-item">
          <Link to="/dreamInterp" className="nav-link">Dream Interpreter</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}