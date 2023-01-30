import './Button.css';
import React from 'react';
import DatabaseConnector from '../Connections';
import GeneralButton from './GeneralButton';
import BackButton from './BackButton';

//Container for the 3/4 buttons that user can click to choose from where they want the weather
class ButtonContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            test:""
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    




    
    render() {
        return (
            <div className="buttonContainer">
                <h2 id='cityText'>Valitse kaupunki</h2>
                <GeneralButton type="1"/>
                <GeneralButton type="2"/>
                <GeneralButton type="3"/>
            </div>
        );
      }
  }

export default ButtonContainer;