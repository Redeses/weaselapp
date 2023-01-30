import './DataContainer.css';
import React from 'react';
import GeneralButton from '../Buttons/GeneralButton';
import ButtonContainer from '../Buttons/ButtonContainer';

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
            <div className="welcomeContainer">
                <h1 className='welcomeMessage'>Tervetuloa yksinkertaiselle sää sivustolle</h1>
                <h2>Olkaa hyvä ja valitkaa kaupunki</h2>
                <div className='weclomeButtonsContainer'>
                    <GeneralButton type="1" getData={this.props.getData} goBack={this.props.goBack}/>
                    <GeneralButton type="2" getData={this.props.getData} goBack={this.props.goBack}/>
                    <GeneralButton type="3" getData={this.props.getData} goBack={this.props.goBack}/>
                    <GeneralButton type="4" getData={this.props.getData} goBack={this.props.goBack}/>
                </div>
            </div>
        );
      }
    
    }

export default Welcome;