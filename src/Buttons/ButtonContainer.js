import './Button.css';
import React from 'react';
import GeneralButton from './GeneralButton';
import AddCityButton from '../AddCities/AddCityButton';

//Container for the buttons that user can click to choose from where they want the weather
//this is shown when the weather container is also shown

//the buttons could be done with an array of the locations and a loop to make them
class ButtonContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            test:"",
            buttonArray1:[],
            buttonArray:[
                [[60.17, 24.95],"Helsinki"],
                [[61.06, 28.19],"Lappeenranta"],
                [[61.50, 23.80],"Tampere"],
                [[60.45, 22.28],"Turku"],
            ]
        
        }
        this.makeButtonArray = this.makeButtonArray.bind(this);
    }

    componentDidMount(){
        this.makeButtonArray();
    }

    componentDidUpdate(){
    }

    makeButtonArray=()=>{
        var proxyArray=[]
        for(var key in this.state.buttonArray){
            console.log(key)
            console.log(this.state.buttonArray[key][1])
            proxyArray.push(<GeneralButton type={1} key={key} showLessData={this.props.showLessData} goBack={this.props.goBack} getData={this.props.getData} location={this.state.buttonArray[key][0]} name={this.state.buttonArray[key][1]}/>)
        }
        if(this.props.neutral){
            proxyArray.push(<GeneralButton type={"0"} showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack} location={this.state.buttonArray[key][0]} name={this.state.buttonArray[key][1]}/>)
        
        }
        proxyArray.push(<AddCityButton/>)
        console.log(proxyArray)
        this.setState({buttonArray1:proxyArray})
    }

    




    
    render() {
        if(this.props.isOn && this.props.neutral){
        return (
            <div className="buttonContainer">
                <h2 id='cityText'>Valitse kaupunki</h2>
                {this.state.buttonArray1}
            </div>
        );
        }
        if(this.props.isOn && !this.props.neutral){
            return (
                <div >
                    {this.state.buttonArray1}
                </div>
            );
        }
    }
  }

export default ButtonContainer;