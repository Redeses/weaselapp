import './DataContainer.css';
import React from 'react';
import DayDataContainer from './DayDataContainer';
import Welcome from './WelcomeShow';

//User information and data of their purhcases that will be shown in the main window
class DataContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            dailyWheaterDataArray:new Array,
            slideValue:1,
            valueCheck:1
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }


    handleChange=(event)=> {
        this.setState({slideValue: event.target.value});
      }


    
    render() {
        if(this.props.isON){
            <Welcome/>
        }else{
        return (
            <div className="dataContainer">
                <h1 className='location'>{this.props.location} TEst location</h1>
                <div className='dataShow'>
                    <DayDataContainer/>
                    <DayDataContainer/>
                    <DayDataContainer/>
                    {this.state.dailyWheaterDataArray}
                </div>
                <div className="slidecontainer">
                    <input type="range" min="1" max="5" value={this.state.slideValue} className="slider" id="myRange" onChange={this.handleChange}/>
                    <div className='slideValueContainer'>
                        <h3>{this.state.slideValue}</h3>
                    </div>
                </div>
                
            </div>
        );
      }
    }
    }

export default DataContainer;