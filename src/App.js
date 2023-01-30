
import './App.css';
import React from 'react';
import ButtonContainer from './Buttons/ButtonContainer';
import GeneralButton from './Buttons/GeneralButton';
import DatabaseConnector from './Connections';
import DataHandler from './Datahandler';
import DataContainer from './Datashown/DataContainer';

class App extends React.Component {
  constructor(props){
      super();
      this.state={
          currentData:{},
          locationChosen:0,
          isOn:true
      };
      
  }

  

  componentDidMount=()=>{

}

  setCurrentData=(e)=>{
    this.setState({currentData:e.currentData})
  }


  getData=()=>{
    var data=DatabaseConnector.getInstance().getWeatherData()
    
    data.then((result=>{this.setState({currentData:DataHandler.getInstance().parseData(result)})}))
  }

  

  render() {
    
    return (<div className="App">
      <h1 className='appName'></h1>
      <button onClick={this.getData} >clickMe</button>
      <ButtonContainer getData={this.getData}/>
      <DataContainer data={this.state.currentData} isOn={this.state.isOn}/>
  </div>
    );
  }
}

export default App;

