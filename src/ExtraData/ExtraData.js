import './ExtraData.css';
import React from 'react';
import WeatherChart from './Charts';


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
    


    //this.props.dailydata
    //this.props.location
    //this.props.date
    render() {
        if(this.props.showMore){
        
        return (
            <div className="extraDataContainer" >
                <button className='cancelButton' onClick={this.cancel}>Cancel</button>
                <h2 className='extraInfoHeader'>Lisätietoja: {this.props.currentTL[0]} : {this.props.currentTL[1]}</h2>       
                <div className='charts'>
                    <WeatherChart dailyData={this.props.dailyData}/>
                </div>
            </div>
        );
      }
    }
  }

export default ExtraData;