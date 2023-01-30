import './Button.css';
import React from 'react';
class TampereButton extends React.Component {


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
                <button  className='locationButton' >Tampere</button>
            </div>
        );
      }
  }

export default TampereButton;