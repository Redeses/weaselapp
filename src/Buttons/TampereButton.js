import './Button.css';
import React from 'react';
class TampereButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
            coordinates:[61.50, 23.80],
            name:"Tampere"
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    


    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButton' onClick={event=>this.props.getData(event,[this.state.coordinates,this.state.name])}>Tampere</button>
            </div>
        );
      }
  }

export default TampereButton;