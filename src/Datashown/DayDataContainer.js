import './DataContainer.css';
import React from 'react';

//container for the daily weather data. Is used in the App.js to make a list for weather container
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

    //triggered when the weather card is clicke. Shows etra data about the day on hte right
    weatherCardClickHandler=(event)=>{
        this.props.showMoreData(event, [this.props.specDate,this.props.locationCords])
    }
    
    
    


    
    render() {
        return (
            <div className="dayContainer" onClick={this.weatherCardClickHandler}>
                <h2 className='dayDate'> {this.props.day} {this.props.date}</h2>
                <div className='dayGeneralWheather'>
                    
                    <div className='weatherIconContainer'>
                        <img className='weatherIcon' alt={'image of'+this.props.weather[1]} src={require(`../images/${this.props.weather[2]}`)}></img> 
                    </div>
                    <div>Sää: {this.props.weather[1]}</div>
                </div>
                <div className='dayText'>Lämpötila: {this.props.temperature}</div>
                <div className='dayText'>Sademäärä: {this.props.precipitation}</div>
                <div className='dayText'>Maksimi tuuli: {this.props.wind}</div>
            </div>
        );
      }
  }

export default DayDataContainer;