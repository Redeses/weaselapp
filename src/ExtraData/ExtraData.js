import './ExtraData.css';
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

   
    
    cancel(){

    }
    


    //this.props.dailydata
    //this.props.location
    //this.props.date
    render() {
        if(this.props.showMore)
        return (
            <div className="extraDataContainer" >
                <button className='cancelButton' onClick={this.cancel}>Cancel</button>
                
            </div>
        );
      }
  }

export default ExtraData;