import './DataContainer.css';
import React from 'react';
import GeneralButton from '../Buttons/GeneralButton';
import ButtonContainer from '../Buttons/ButtonContainer';

class WeatherContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            dailyWheaterDataArray:new Array,
            slideValue:1,
            valueCheck:1,
            resetSwitch:false
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    componentWillUnmount(){
        this.setState({slideValue: 1});
    }

    handleChange=(event)=> {
        
        
        this.setState({slideValue: event.target.value});
        
      }





    
    render() {
            return(
                <div className="dataContainer">
                <div className="slidecontainer">
                    <input type="range" min="1" max="7" value={this.state.slideValue} className="slider" id="myRange" onChange={this.handleChange}/>
                    <div className='slideValueContainer'>
                        <h3>Näytettyjä päiviä : {this.state.slideValue}</h3>
                    </div>
                </div>
                <h1 className='location'>{this.props.location}</h1>
                <div className='dataShow'>
                    {this.props.elements.slice(0,this.state.slideValue)}
                    
                </div>
                
                
            </div>
            );
      
    }
    
    }

export default WeatherContainer;