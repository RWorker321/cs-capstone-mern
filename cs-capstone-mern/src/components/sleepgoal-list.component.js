import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SleepGoal = props => (
  <tr>
    <td>{props.sleepgoal.username}</td>
    <td>{props.sleepgoal.description}</td>
    <td>{props.sleepgoal.duration}</td>
    <td>{props.sleepgoal.date.substring(0,10)}</td>
    <td>
      <Link to={"/editsleepgoal/"+props.sleepgoal._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSleepGoal(props.sleepgoal._id) }}>delete</a>
    </td>
  </tr>
)

export default class SleepGoalList extends Component {
  constructor(props) {
    super(props);

    this.deleteSleepGoal = this.deleteSleepGoal.bind(this)

    this.state = {sleepgoal: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/sleepgoals/')
      .then(response => {
        this.setState({ sleepgoal: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSleepGoal(id) {
    axios.delete('http://localhost:5000/sleepgoals/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      sleepgoal: this.state.sleepgoal.filter(el => el._id !== id)
    })
  }

  sleepGoalList() {
    return this.state.sleepgoal.map(currentsleepgoal => {
      return <SleepGoal sleepgoal={currentsleepgoal} deleteSleepGoal={this.deleteSleepGoal} key={currentsleepgoal._id}/>;
    })
  }

  // Render/Return JSX for SleepGoal List
  render() {
    return (
      <div>
        <h3>Sleep Goals</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.sleepGoalList() }
          </tbody>
        </table>
      </div>
    )
  }
}