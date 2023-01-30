import './DataContainer.css';
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
        if(this.props.showMore && (this.props.dailyData))
        return (
            <div className="extraDataContainer" >
                
            </div>
        );
      }
  }

export default ExtraData;