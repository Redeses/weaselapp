import './DataContainer.css';
import React from 'react';


class WeatherContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            dailyWheaterDataArray:[],
            slideValue:1,
            valueCheck:1,
            resetSwitch:false,
            showButtonText:"Näytä kolmen päivän sää"
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
        if(event.target.value==="3"){
            this.setState({showButtonText: "Näytä vain tämän päivän sää"});
            
        }else{
            this.setState({showButtonText: "Näytä kolmen päivän sää"});
        }
      }

    handeClick=()=>{
        if(this.state.slideValue===3){
            this.setState({showButtonText: "Näytä kolmen päivän sää",slideValue:1});
            
        }else{
            this.setState({showButtonText: "Näytä vain tämän päivän sää",slideValue:3});
        }
    }





    
    render() {
            return(
                <div className="dataContainer">
                <div className="slidecontainer">
                    <h4>Slideri jolla voi muutta näytettyjen päivien määrää</h4>
                    <input type="range" min="1" max="7" value={this.state.slideValue} className="slider" id="myRange" onChange={this.handleChange}/>
                    <div className='slideValueContainer'>
                        <h3>Näytettyjä päiviä : {this.state.slideValue}</h3>
                    </div>
                </div>
                <h1 className='location'>Kaupungin sää: {this.props.location}</h1>
                <button className='showThreeDays' onClick={this.handeClick}>{this.state.showButtonText}</button>
                <div className='dataShow'>
                    {this.props.elements.slice(0,this.state.slideValue)}
                    
                </div>
                
                
            </div>
            );
      
    }
    
    }

export default WeatherContainer;