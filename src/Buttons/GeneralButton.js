import './Button.css';
import React from 'react';
import BackButton from './BackButton';

//general functions used by all of the location choosing buttons

class GeneralButton extends React.Component {
    
    

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
    
        console.log(this.props)
        console.log("GB")
    }

    componentDidUpdate(){
    }

    

    
    render() {
        
        if(this.props.type===1){
            return(
                <div className="locationButtonContainer">
                    <button  className='locationButton' onClick={event=>this.props.getData(event,[this.props.location,this.props.name])}>{this.props.name}</button>
                </div>
            )
        }else{
            return (
                <div className="backButton">
                    <BackButton goBack={this.props.goBack}/>
                </div>
            );
        }
        
      }
  }

export default GeneralButton;