import React from 'react';
import './ExtraData.css';
import DataHandler from '../Datahandler';
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
            label: '(lumi/räntä/vesi-)Sademäärä (mm)',
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
            label: 'Lämpötila (C)',
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
            label: 'Tuulen nopeus (km/h)',
            data: [],
            backgroundColor: 'rgb(106, 119, 158)',
            fontsize:"40px",
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
            ticks: {
              callback: function(value, index, ticks) {
                  return value+'mm';
              }
            }
          },
        },
      };

      options2 = {
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
            ticks: {
              callback: function(value, index, ticks) {
                  return value+'°C';
              }
            }
          },
        },
      };

      options3 = {
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
            ticks: {
              callback: function(value, index, ticks) {
                  return value+'km/h';
              }
            }
          },
        },
      };

      

    constructor(props){
        super(props);
        this.chartReference = React.createRef();
        this.state={
          data1:this.data1,
          data2:this.data1,
          data3:this.data1,
        }
       
      }
    

    componentDidMount(){
      console.log("ttea")
    }

    componentDidUpdate(nextProps){
      
    }

    /*data1:(this.data1.datasets[0].data=this.props.dailyData.hourly.precipitation),
            data2:(this.data2.datasets[0].data=this.props.dailyData.hourly.temperature_2m),
            data3:(this.data3.datasets[0].data=this.props.dailyData.hourly.windspeed_10m) */
/*
    static getDerivedStateFromProps(props,state) {
      var data1bool=(JSON.stringify(state.data1.datasets[0].data)!==JSON.stringify(props.dailyData.hourly.precipitation))
      var data2bool=(JSON.stringify(state.data2.datasets[0].data)!==JSON.stringify(props.dailyData.hourly.temperature_2m))
      var data3bool=(JSON.stringify(state.data3.datasets[0].data)!==JSON.stringify(props.dailyData.hourly.windspeed_10m)) 
      
      if(data1bool||data2bool||data3bool){
          //Change in props
          console.log("success")
          return{
            data1:DataHandler.getInstance().getData1(props.dailyData.hourly.precipitation),
            data2:DataHandler.getInstance().getData2(props.dailyData.hourly.temperature_2m),
            data3:DataHandler.getInstance().getData3(props.dailyData.hourly.windspeed_10m),
          };
      }
      return null;
    }*/

    
    

  


  
    render() {   
        return (
            <div className="" >
                <Bar className='chartBar' options={this.options} data={DataHandler.getInstance().getData1(this.props.dailyData.hourly.precipitation)} />
                <Bar className='chartBar' options={this.options2} data={DataHandler.getInstance().getData2(this.props.dailyData.hourly.temperature_2m)} />
                <Bar className='chartBar' options={this.options3} data={DataHandler.getInstance().getData3(this.props.dailyData.hourly.windspeed_10m)} />
            </div>
        );
    }
  }

export default WeatherChart;


