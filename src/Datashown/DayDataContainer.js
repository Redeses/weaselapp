import './DataContainer.css';
import DataHandler from '../Datahandler';
import React from 'react';


class DayDataContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    
    
    
    


    
    render() {
        return (
            <div className="dayContainer">
                <h2 className='dayDate'> {this.props.day} {this.props.date}</h2>
                <div className='dayGeneralWheather'>{this.props.weather[1]} {this.props.weather[2]}</div>
                <div className='dayTemperature'>Lämpötila: {this.props.temperature}</div>
                <div className='dayPrecipt'>Sademäärä: {this.props.precipitation}</div>
                <div className='dayWind'>Maksimi tuuli: {this.props.wind}</div>
            </div>
        );
      }
  }

export default DayDataContainer;