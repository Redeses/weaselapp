
import './App.css';
import React from 'react';
import ButtonContainer from './Buttons/ButtonContainer';
import DatabaseConnector from './Connections';
import DataHandler from './Datahandler';
import DataContainer from './Datashown/DataContainer';
import DayDataContainer from './Datashown/DayDataContainer';

class App extends React.Component {
  dataArray=new Array;
  constructor(props){
      super();
      this.state={
          currentData:{},
          custArray:new Array,
          isOn:false,
          location:""
      };
      
  }

  

  componentDidMount=()=>{

}

  setCurrentData=(e)=>{
    this.setState({currentData:e.currentData})
  }

/*<h2 className='dayDate'> {this.props.date}</h2>
                <div className='dayGeneralWheather'>{this.props.wheather}</div>
                <div className='dayTemperature'>{this.props.temperature}</div>
                <div className='dayPrecipt'>{this.props.precipitation}</div>
                <div className='dayWind'>{this.props.wind}</div> */
  getData=(event, param)=>{
    var data=DatabaseConnector.getInstance().getWeatherData(param[0])
    
    this.setState({location:param[1],isOn:true})
    if(this.state.isOn){
      this.dataArray=new Array
    }

    data.then((result)=>{for(const key in result.daily.time){        
      var date=new Date(result.daily.time[key])
      var fulldate=date.toLocaleDateString("fi-FI", { weekday: 'long' })+" "+date.getDate()+"."+(parseInt(date.getMonth())+1);
      var temperature=result.daily.apparent_temperature_max[key] + " "+ result.daily_units.apparent_temperature_max
      var precipitation=result.daily.precipitation_sum[key]+" " +result.daily_units.precipitation_sum
      var wind=result.daily.windspeed_10m_max[key]+" "+result.daily_units.windspeed_10m_max
      var weather=DataHandler.getInstance().getweatherImageName(result.daily.weathercode[key]);
      console.log(weather)
      this.dataArray.push(<DayDataContainer key={key} showMoreData={this.getMoreData} date={fulldate} specDate={date.getDate()+"."+(parseInt(date.getMonth())+1)+"."+date.getFullYear}  weather={weather} temperature={temperature} precipitation={precipitation} wind={wind}/>);
    }
    this.setState({custArray:this.dataArray});
    })
  }

  //gets more data base on the specific date
  getMoreData=()=>{
    console.log("works")
  }

  //used to go back
  goBack=()=>{
    console.log("this.goBack")
    this.setState({isOn:false});
  }

  

  render() {
    
    return (<div className="App">
      <h1 className='appName'></h1>
      <ButtonContainer getData={this.getData} goBack={this.goBack} isOn={this.state.isOn}/>
      <DataContainer getData={this.getData} data={this.state.currentData} location={this.state.location} elements={this.state.custArray} isOff={!this.state.isOn}/>
  </div>
    );
  }
}

export default App;

