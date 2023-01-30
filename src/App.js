
import './App.css';
import React from 'react';
import ButtonContainer from './Buttons/ButtonContainer';
import DatabaseConnector from './Connections';
import DataHandler from './Datahandler';
import DataContainer from './Datashown/DataContainer';
import DayDataContainer from './Datashown/DayDataContainer';
import ExtraData from './ExtraData/ExtraData';

//https://www.iconfinder.com/weather-icons?category=weather&price=free&license=gte__2
class App extends React.Component {
  dataArray=new Array;
  constructor(props){
      super();
      this.state={
          currentData:{},
          custArray:new Array,
          dailyArray:new Array,
          isOn:false,
          showMore:true,
          location:"",

      };
      
  }

  

  componentDidMount=()=>{

}

  setCurrentData=(e)=>{
    this.setState({currentData:e.currentData})
  }


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
      var month1=parseInt(date.getMonth())+1
      var month=month1
      if(month1<10){
        month=0+month1.toString()
      }
      var specDate=date.getFullYear()+"-"+month+"-"+date.getDate()
      this.dataArray.push(<DayDataContainer key={key} locationCords={param[0]} showMoreData={this.getMoreData} date={fulldate} specDate={specDate}  weather={weather} temperature={temperature} precipitation={precipitation} wind={wind}/>);
    }
    this.setState({custArray:this.dataArray});
    })
  }

  //gets more data base on the specific date
  getMoreData=(event,param)=>{
    var data=DatabaseConnector.getInstance().getDailyWheatherData(param[1],param[0]);

    data.then((result)=>{
      
    })
    this.setState({showMore:true})
  }

  showLessData=()=>{
    this.setState({showMore:false})
  }

  //used to go back
  goBack=()=>{
    console.log("this.goBack")
    this.setState({isOn:false,showMore:false});
  }

  testDataGet=()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    DatabaseConnector.getInstance().getDailyWheatherData([60.02,24.01],today);
  }

  render() {
    
    return (<div className="App">
      <h1 className='appName'></h1>
      <button onClick={this.testDataGet}>Click me</button>
      <ButtonContainer getData={this.getData} goBack={this.goBack} isOn={this.state.isOn}/>
      <DataContainer getData={this.getData} data={this.state.currentData} location={this.state.location} elements={this.state.custArray} isOff={!this.state.isOn}/>
      <ExtraData showMore={this.state.showMore}/>
  </div>
    );
  }
}

export default App;

