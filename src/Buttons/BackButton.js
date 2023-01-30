import './Button.css';
import React from 'react';
class BackButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
        }
        this.settingColor=this.settingColor.bind(this)
    }

    componentDidMount(){
        
        this.settingColor()
    }

    componentDidUpdate(){
    }

    


    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButtonContainer' >Helsinki</button>
            </div>
        );
      }
  }

export default BackButton;