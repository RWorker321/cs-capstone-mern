import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// 
const Usernames = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.firstname}</td>
    <td>{props.user.lastname}</td>
    <td>{props.user.age}</td>
    <td>
       <a href="#" onClick={() => { props.deleteUsername(props.user._id) }}>delete</a>
    </td>
  </tr>
)

// Pass functions to components
export default class UsernameList extends Component {
  constructor(props) {
    super(props);

    this.deleteUsername = this.deleteUsername.bind(this)

    this.state = {user: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ user: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUsername(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        user: this.state.user.filter(el => el._id !== id)
    })
  }

  usernameList() {
    return this.state.user.map(currentuser => {
      return <Usernames user={currentuser} deleteUsername={this.deleteUsername} key={currentuser._id}/>;
    })
  }

  // Render/Return JSX for SleepJournal List
  render() {
    return (
      <div>
        <h3>Usernames</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.usernameList() }
          </tbody>
        </table>
      </div>
    )
  }
}