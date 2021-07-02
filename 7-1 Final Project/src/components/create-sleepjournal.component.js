import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default class CreateSleepJournal extends Component {
  // All React components begin with a super(props) call
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Set state properties corresponding with MongoDB document
    // empty user array for drop down menu
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  // componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.
  // https://linguinecode.com/post/understanding-react-componentdidmount
  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          // setState trigger UI update
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Define change state functions
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  // preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
  // https://www.robinwieruch.de/react-preventdefault
  onSubmit(e) {
    e.preventDefault();

    let sleepjournal = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(sleepjournal);

    axios.post('http://localhost:5000/sleepjournal/add', sleepjournal)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });

    window.location = '/';
  }

  // Render/Return JSX for SleepJournal Create
  render() {
    return (
    <div>
      <h3>Create a Sleep Journal</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Sleep Journal Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>How Long Did You Sleep (in hours): </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              showTimeSelect
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Sleep Journal Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}