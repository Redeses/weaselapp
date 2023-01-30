import './Button.css';
import React from 'react';
class HelsinkiButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
        clicked:false
        }

    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    


    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButton' >Helsinki</button>
            </div>
        );
      }
  }

export default HelsinkiButton;