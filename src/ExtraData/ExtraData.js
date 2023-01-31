import './ExtraData.css';
import React from 'react';
import WeatherChart from './Charts';
import MiddleChart from './middlewareChart';


class ExtraData extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            date:null,
            location:this.props.location
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){
    }

    
    cancel=(event)=>{
        this.props.showLessData()
    }
    


   //currentTL stands for currentTimeAndLocation, it is an array of data to be shown in the Extradata container
    render() {
        if(this.props.showMore){
        
        return (
            <div className="extraDataContainer" >
                <button className='cancelButton' onClick={this.cancel}>Sulje</button>
                <h2 className='extraInfoHeader'>Lisätietoja</h2>
                <h2 className='extraInfoHeader'>{this.props.currentTL[0]}</h2>  
                <h2 className='extraInfoHeader'>{this.props.currentTL[1]}</h2>       
                <div className='charts'>
                    <MiddleChart dailyData={this.props.dailyData} weatherBool={this.props.weatherBool}/>
                </div>
            </div>
        );
      }
    }
  }

export default ExtraData;