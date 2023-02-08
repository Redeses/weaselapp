import './DataContainer.css';
import React from 'react';
import GeneralButton from '../Buttons/GeneralButton';
import ButtonContainer from '../Buttons/ButtonContainer';

class Welcome extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            dailyWheaterDataArray:[],
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
                <div className='welcomeMessage'>
                <h1 >Tervetuloa yksinkertaiselle sää sivustolle</h1>
                <h2>Olkaa hyvä ja valitkaa kaupunki</h2>
                </div>
                <div className='weclomeButtonsContainer'>
                    <ButtonContainer getData={this.props.getData} showLessData={this.props.showLessData} isOn={true} neutral={false}/>
                </div>
            </div>
        );
      }
    
    }

export default Welcome;