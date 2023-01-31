import React from 'react';
import './ExtraData.css';
import WeatherChart from './Charts';

//used pure for the if statement(for now)
class MiddleChart extends React.Component {
    

      

    constructor(props){
        super(props);
        this.chartReference = React.createRef();
        this.state={
        }
       
      }
    

    componentDidMount(){
    }

    componentDidUpdate(nextProps){
      
    }

  
    render() {
      if(this.props.weatherBool){
        console.log("test")
      
        return (
            <WeatherChart dailyData={this.props.dailyData}/>
            
        );
    }
    }
  }

export default MiddleChart;


