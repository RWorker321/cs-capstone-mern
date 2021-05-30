import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// 
const SleepJournal = props => (
  <tr>
    <td>{props.sleepjournal.username}</td>
    <td>{props.sleepjournal.description}</td>
    <td>{props.sleepjournal.duration}</td>
    <td>{props.sleepjournal.date.substring(0,10)}</td>
    <td>
      <Link to={"/editsleepjournal/"+props.sleepjournal._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSleepJournal(props.sleepjournal._id) }}>delete</a>
    </td>
  </tr>
)

// Pass functions to components
export default class SleepJournalList extends Component {
  constructor(props) {
    super(props);

    this.deleteSleepJournal = this.deleteSleepJournal.bind(this)

    this.state = {sleepjournal: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/sleepjournal/')
      .then(response => {
        this.setState({ sleepjournal: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSleepJournal(id) {
    axios.delete('http://localhost:5000/sleepjournal/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        sleepjournal: this.state.sleepjournal.filter(el => el._id !== id)
    })
  }

  sleepJournalList() {
    return this.state.sleepjournal.map(currentsleepjournal => {
      return <SleepJournal sleepjournal={currentsleepjournal} deleteSleepJournal={this.deleteSleepJournal} key={currentsleepjournal._id}/>;
    })
  }

  // Render/Return JSX for SleepJournal List
  render() {
    return (
      <div>
        <h3>Sleep Journals</h3>
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
            { this.sleepJournalList() }
          </tbody>
        </table>
      </div>
    )
  }
}