import './Button.css';
import React from 'react';
class HelsinkiButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
            coordinates:[60.17, 24.95],
            name:"Helsinki"
        }

    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    //onClick={this.props.getData([this.state.coordinates,this.state.name])}
    handleClick=(event,param)=>{
        console.log("param")
    }

    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButton' onClick={event=>this.props.getData(event,[this.state.coordinates,this.state.name])}>Helsinki</button>
            </div>
        );
      }
  }

export default HelsinkiButton;