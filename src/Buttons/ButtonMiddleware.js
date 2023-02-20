import './Button.css';
import React from 'react';
import GeneralButton from './GeneralButton';
import AddCityButton from '../AddCities/AddCityButton';
import DataHandler from '../Datahandler';
import ButtonContainer from './ButtonContainer';

//Container for the buttons that user can click to choose from where they want the weather
//this is shown when the weather container is also shown

//the buttons could be done with an array of the locations and a loop to make them
class ButtonMiddleware extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            test:"",
            buttonArray1:[],
            neutrality:this.props.showMore
        }
        this.makeButtonArray = this.makeButtonArray.bind(this);
    }

    componentDidMount(){
        this.makeButtonArray();
    }

    componentDidUpdate(){
        
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
        this.props.addToButtons(e)
        //this.makeButtonArray()
    }
    

    makeButtonArray=()=>{
        //console.log("making button container")
        var proxyArray=[]
        for(var key in this.props.buttonArray){
            proxyArray.push(<GeneralButton type={1} key={key} showLessData={this.props.showLessData} goBack={this.props.goBack} getData={this.props.getData} location={this.props.buttonArray[key][0]} name={this.props.buttonArray[key][1]}/>)
        }
        if(this.props.neutral){
            proxyArray.push(<GeneralButton type={"0"} showLessData={this.props.showLessData} getData={this.props.getData} goBack={this.props.goBack} location={this.props.buttonArray[key][0]} name={this.props.buttonArray[key][1]}/>)
            proxyArray.push(<div className='sideMenuAddC'><AddCityButton buttons={this.props.buttonArray} addToButtons={this.remakeArray}/></div>)
        
        }else{
            proxyArray.push(<div className=''><AddCityButton buttons={this.props.buttonArray} addToButtons={this.remakeArray}/></div>)
        
        }
        //this.setState({buttonArray1:proxyArray})
        return proxyArray
    }

    
    render() {
        var proxyArray=this.makeButtonArray()
        return (
            <div >
                <ButtonContainer addToButtons={this.props.addToButtons} buttonArray={proxyArray} getData={this.props.getData} showLessData={this.props.showLessData} goBack={this.props.goBack} isOn={this.props.isOn} neutral={this.props.neutral}/>
            </div>
        );
        
    }
  }

export default ButtonMiddleware;