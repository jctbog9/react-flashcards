import React, { Component } from 'react';

import Chart from 'chart.js';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Decks', 'Followers'],
        datasets: [{
          label: `${this.props.user}'s stats'`,
          data: [this.props.decksLength, this.props.followeeCount],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(70, 99, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(90, 99, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  render(){
    return(
      <div>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )
  }
};

export default Graph;
