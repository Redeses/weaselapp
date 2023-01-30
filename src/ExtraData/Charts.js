import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


class WeatherChart extends React.Component {
    labels = ['00:00', '01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00',];
    data1 = {
        labels:this.labels,
        datasets: [
          {
            label: '(lumi/räntä/vesi-)Sademäärä',
            data: [],
            backgroundColor: 'rgb(14, 135, 204)',
            stack: 'Stack 0',
          },
        ],
      };

      data2 = {
        labels:this.labels,
        datasets: [
          {
            label: 'Lämpötila',
            data: [],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
          },
        ],
      };

      data3 = {
        labels:this.labels,
        datasets: [
          {
            label: 'Tuulen nopeus',
            data: [],
            backgroundColor: 'rgb(106, 119, 158)',
            stack: 'Stack 0',
          },
        ],
      };

      

      options = {
        plugins: {
          title: {
            display: true
          },
        },
        responsive: true,
        interaction: {
          mode: 'index' ,
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        this.data1.datasets[0].data=this.props.dailyData.hourly.precipitation
        this.data2.datasets[0].data=this.props.dailyData.hourly.temperature_2m
        this.data3.datasets[0].data=this.props.dailyData.hourly.windspeed_10m
    }

    componentDidUpdate(){
    }




  
    render() {
        return (
            <div className="" >
                <Bar options={this.options} data={this.data1} />
                <Bar options={this.options} data={this.data2} />
                <Bar options={this.options} data={this.data3} />
            </div>
        );
      }
  }

export default WeatherChart;


