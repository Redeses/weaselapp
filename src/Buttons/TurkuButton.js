import './Button.css';
import React from 'react';
class TurkuButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    


    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButton' >Turku</button>
            </div>
        );
      }
  }

export default TurkuButton;