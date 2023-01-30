import './DataContainer.css';
import React from 'react';

//User information and data of their purhcases that will be shown in the main window
class DayDataContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            daysText:"Show 3 days",
            dailyWheaterDataArray:new Array
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    
    

    


    
    render() {
        return (
            <div className="dayContainer">
                <h2 className='dayDate'>Date {this.props.date}</h2>
                <div className='dayGeneralWheather'></div>
                <div className='dayTemperature'></div>
                <div className='dayWind'></div>
            </div>
        );
      }
  }

export default DayDataContainer;