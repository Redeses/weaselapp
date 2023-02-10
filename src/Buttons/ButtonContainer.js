import './Button.css';
import React from 'react';
import GeneralButton from './GeneralButton';
import AddCityButton from '../AddCities/AddCityButton';
import DataHandler from '../Datahandler';

//Container for the buttons that user can click to choose from where they want the weather
//this is shown when the weather container is also shown

//the buttons could be done with an array of the locations and a loop to make them
class ButtonContainer extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            test:"",
            buttonArray1:[],
        
        }
        this.makeButtonArray = this.makeButtonArray.bind(this);
        
    }



    componentDidMount(){
    }

    componentDidUpdate(){
        console.log("test")
    }
    

    /*
    React.useEffect(() => { console.log("component updated"); }); */

    
    /*useEffect(() => {
  fetchSomeData(props.filters);
}, [props.filters]); */

/*useEffect(() => {
    setChildCount(parentCount * 2);

    console.log('useEffect logic ran');
  }, [parentCount]); */

    remakeArray=(e)=>{
        this.makeButtonArray()
        this.props.addToButtons(e)
    }
    

    makeButtonArray=()=>{
        var proxyArray=[]
        for(var key in this.props.buttonArray){
            proxyArray.push(<GeneralButton type={1} key={key} showLessData={this.props.showLessData} goBack={this.props.goBack} getData={this.props.getData} location={this.props.buttonArray[key][0]} name={this.props.buttonArray[key][1]}/>)
        }
        var text="center center"
        if(this.props.neutral){
            proxyArray.push(<GeneralButton type={"0"} showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack} location={this.props.buttonArray[key][0]} name={this.props.buttonArray[key][1]}/>)
            text="right center"
        }
        proxyArray.push(<AddCityButton buttons={this.props.buttonArray} addToButtons={this.remakeArray} neutral={this.props.neutral}/>)
        this.setState({buttonArray1:proxyArray})
    }

    
    render() {
        if(this.props.isOn && this.props.neutral){
        return (
            <div className="buttonContainer">
                <h2 id='cityText'>Valitse kaupunki</h2>
                {this.props.buttonArray}
            </div>
        );
        }
        if(this.props.isOn && !this.props.neutral){
            return (
                <div className='welcomeButtonsContainer'>
                    {this.props.buttonArray}
                    
                </div>
            );
        }
    }
  }

export default ButtonContainer;