import './Button.css';
import React from 'react';
import DatabaseConnector from '../Connections';
import HelsinkiButton from './HelsinkiButton';
import TurkuButton from './TurkuButton';
import TampereButton from './TampereButton';
import BackButton from './BackButton';

//general functions used by all of the buttons
class GeneralButton extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        
        this.settingColor()
    }

    componentDidUpdate(){
    }

    


    settingColor=()=>{
        if(this.props.storage>20){this.setState({product_color:"green"})}else if(this.props.storage>5){this.setState({product_color:"yellow"})}else if(this.props.storage<1){this.setState({product_color:"red"})}
    }


    
    render() {
        if(this.props.type=="1"){
            return (
                <div className="helsinkiButton">
                    <HelsinkiButton/>
                </div>
            );
        }else if(this.props.type=="2"){
            return (
                <div className="turkuButton">
                    <TurkuButton/>
                </div>
            );
        }
        else if(this.props.type=="3"){
            return (
                <div className="tampereButton">
                    <TampereButton/>
                    </div>
            );
        }else{
            return (
                <div className="backButton">
                    <BackButton/>
                    </div>
            );
        }
        
      }
  }

export default GeneralButton;