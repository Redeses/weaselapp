import './Button.css';
import React from 'react';
import DatabaseConnector from '../Connections';
import GeneralButton from './GeneralButton';
import BackButton from './BackButton';

//Container for the buttons that user can click to choose from where they want the weather
class ButtonContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            test:""
        }
    }

    componentDidMount(){
        console.log("mounted")
    }

    componentDidUpdate(){
    }

    




    
    render() {
        if(this.props.isOn){
        return (
            <div className="buttonContainer">
                <h2 id='cityText'>Valitse kaupunki</h2>
                <GeneralButton type="1" showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack}/>
                <GeneralButton type="2" showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack}/>
                <GeneralButton type="3" showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack}/>
                <GeneralButton type="4" showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack}/>
                <GeneralButton type="0" showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack}/>
                
            </div>
        );
        }
    }
  }

export default ButtonContainer;