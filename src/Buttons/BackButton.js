import './Button.css';
import React from 'react';

//used to bring the front screen back up
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
                <button  className='backButtonActual' onClick={this.props.goBack}>Takaisin</button>
            </div>
        );
      }
  }

export default BackButton;