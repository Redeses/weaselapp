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
                        <img className='weatherIcon' src={require(`../images/${this.props.weather[2]}`)}></img> 
                    </div>
                    <div>{this.props.weather[1]}</div>
                </div>
                <div className='dayText'>Lämpötila: {this.props.temperature}</div>
                <div className='dayText'>Sademäärä: {this.props.precipitation}</div>
                <div className='dayText'>Maksimi tuuli: {this.props.wind}</div>
            </div>
        );
      }
  }

export default DayDataContainer;