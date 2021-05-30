import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios.get("http://www.json-generator.com/api/json/get/coXIyroYAy?indent=2").then(res => {
        const coin = res.data;
        let labels = [];
        let data = [];
        coin.forEach(element => {
        labels.push(element.labels);
        data.push(element.data);

          });

       console.log(coin)
        this.setState({
          chartData: {
            labels:labels,
            datasets: [
              {
                label: "Population",
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 99, 132, 0.6)"
                ],
              }
            ]
          }
        });
      });
    }

  render(){

        return (
          <div className="App">
          {Object.keys(this.state.chartData).length &&
            <Chart
              chartData={this.state.chartData}
              location="Massachusetts"
              legendPosition="bottom"
            />
          }
          </div>
        );

    }     
}

export default App;