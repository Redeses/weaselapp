import './DataContainer.css';
import React from 'react';
import DayDataContainer from './DayDataContainer';
import Welcome from './WelcomeShow';

//User information and data of their purhcases that will be shown in the main window
class DataContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
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
    }

export default DataContainer;