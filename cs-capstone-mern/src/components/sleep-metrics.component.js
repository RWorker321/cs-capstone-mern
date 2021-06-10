// https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

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
          let sleepDuration = []; // Hours of sleep
          let sleepDate = [];     // Date of sleep
          let sleepColors = []; // WiP: Colors of each user


          // push hours and date of response data to duration and date arrays
          resData.forEach(element => {
            sleepDuration.push(element.duration)
            sleepDate.push(element.date)
          });  

          // WiP: Each user will have their own color with overlapping transparent bars
          resData.forEach(element => {
            // let color = [];
            sleepColors.push(element.username)
            // switch (sleepColors) {
            //   case [0]:
            //     color = "red"
            //     break;
            //   case [1]:
            //     color = "blue"
            //     break;
            //   case [2]:
            //     color = "green"
            //     break;
            //   default:
            //     color = "grey"
            //     break;
            // }
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
                  fill: true,
                  active: true,
                  cubicInterpolationMode: 'monotone',
                  backgroundColor:  ['blue', 'red', 'blue'],
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
      <div>
        <h1>Family Sleep Metrics</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Sleep Metrics</th>
            </tr>
          </thead>
          <tbody>
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