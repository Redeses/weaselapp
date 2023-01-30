import './DataContainer.css';
import React from 'react';
class Welcome extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            dailyWheaterDataArray:new Array,
            slideValue:1,
            valueCheck:1
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }


    handleChange=(event)=> {
      }


    
    render() {
        
        return (
            <div className="dataContainer">
            
                
            </div>
        );
      }
    
    }

export default Welcome;