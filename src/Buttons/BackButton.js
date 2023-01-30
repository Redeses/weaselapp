import './Button.css';
import React from 'react';
class BackButton extends React.Component {


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
                <button  className='backButton' >Takaisin</button>
            </div>
        );
      }
  }

export default BackButton;