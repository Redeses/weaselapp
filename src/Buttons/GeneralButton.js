import './Button.css';
import React from 'react';
import HelsinkiButton from './HelsinkiButton';
import TurkuButton from './TurkuButton';
import TampereButton from './TampereButton';
import LappeenrantaButton from './LappeenrantaButton';
import BackButton from './BackButton';

//general functions used by all of the location choosing buttons

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
        if(this.props.type==="1"){
            return (
                <div className="helsinkiButton">
                    <HelsinkiButton getData={this.props.getData} />
                </div>
            );
        }else if(this.props.type==="2"){
            return (
                <div className="turkuButton">
                    <TurkuButton getData={this.props.getData} />
                </div>
            );
        }
        else if(this.props.type==="3"){
            return (
                <div className="tampereButton">
                    <TampereButton getData={this.props.getData} />
                    </div>
            );
        }else if(this.props.type==="4"){
            return (
                <div className="tampereButton">
                    <LappeenrantaButton getData={this.props.getData} />
                    </div>
            );
        }else{
            return (
                <div className="backButton">
                    <BackButton goBack={this.props.goBack}/>
                    </div>
            );
        }
        
      }
  }

export default GeneralButton;