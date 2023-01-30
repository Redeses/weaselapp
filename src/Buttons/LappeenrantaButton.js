import './Button.css';
import React from 'react';
class LappeenrantaButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
            coordinates:[61.06, 28.19],
            name:"Lappeenranta"
        }

    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    


    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButton' onClick={event=>this.props.getData(event,[this.state.coordinates,this.state.name])}>Lappeenranta</button>
            </div>
        );
      }
  }

export default LappeenrantaButton;