// https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import "../custom.css";

// http://localhost:5000/sleepjournal/id/duration

export default class SleepMetrics extends Component {
  constructor(props){
    super(props);
    this.state = {
      lineData: {},
      }
    }
    
    componentDidMount() {
      this.getSleepDuration();
    }

  // Gets Sleep Duration and Sleep Date from Sleep Journal
  getSleepDuration() {
    axios.get('http://localhost:5000/sleepjournal/')
      .then(response => {
        if (response.data.length > 0) {
          const resData = response.data;
          let sleepDuration = [0]; // Hours of sleep
          let sleepDate = ['Start Date']; // Date of sleep

          // push hours and date of response data to duration and date arrays
          resData.forEach(element => {
            sleepDuration.push(element.duration)
            sleepDate.push(element.date)
          });  

          console.log(sleepDuration);
          console.log(sleepDate);

          // Set state of line chart
          this.setState({
            lineData: {
              labels: sleepDate, // Labels x axis with date of sleep
              datasets: [
                {
                  label: 'Sleep Duration',
                  data: sleepDuration, // Labels y axis with duration of sleep
                  fill: false,
                  active: true,
                  cubicInterpolationMode: 'monotone',
                  backgroundColor:  ['blue'],
                  //backgroundColor: 'rgb(3, 0, 1)',
                  borderColor: 'rgba(255, 99, 132, 0.2)',
                  pointBackgroundColor: 'rgba(1, 1, 1)',
                  maintainAspectRatio: false

                }]
              },
              options: {
                title: {
                  display: false
                },
                scales: {
                  xAxes :[{
                    type: 'time',
                    distribution: 'linear'
                  }],
                  yAxes: [{
                    display: true,
                    ticks: {
                      beginAtZero: true, // WiP: Chart not starting at zero
                      min: 0,
                      max: 24
                    }
                  }]
                }
              }
            })
          }
        })
      .catch((error) => {
        console.log(error);
      })
}

// Render/Return JSX for Sleep Metrics
  render() {
    return (
      <div className="sleepMetricsTable">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Sleep Metrics</th>
            </tr>
          </thead>
          <tbody id="SleepMetTableBody">
            <Line
            data={this.state.lineData}
            />
          </tbody>
        </table>
      </div>
    )
  }
}


//export default SleepMetrics;

// options= {{
//   maintainAspectRatio: true,
//   scales: {
//     yAxis: [{
//         ticks: {
//             beginAtZero:true
//         }
//     }]
// },
//   responsive: true,
//   title: {
//   display: true,
//   text: 'Sleep Test'
//   },
//   legend:{
//     display: true,
//     position: 'right'
//   }
// }}