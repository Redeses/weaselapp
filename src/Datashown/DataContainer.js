import './DataContainer.css';
import React from 'react';
import Welcome from './WelcomeShow';
import WeatherContainer from './WeatherContainer';


//a highher level class that will show either wheather data or welcome screen in the middle
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

    componentWillUnmount(){
        
    }


    handleChange=(event)=> {
        this.setState({slideValue: event.target.value});
      }


    
    render() {
        if(!this.props.isOff){
            return(
                <div>
                <WeatherContainer location={this.props.location} elements={this.props.elements}/>
                </div>
            );
        }else if(this.props.isOff){
        return (
            <div>
                <Welcome getData={this.props.getData}/>
            </div>
        );
      }
    }
    }

export default DataContainer;