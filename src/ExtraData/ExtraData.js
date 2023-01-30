import './DataContainer.css';
import DataHandler from '../Datahandler';
import React from 'react';


class ExtraData extends React.Component {
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
        if(this.props.isOn && (this.props.dailyData))
        return (
            <div className="extraDataContainer" >
                
            </div>
        );
      }
  }

export default ExtraData;