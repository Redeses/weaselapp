
import './App.css';
import React from 'react';
import ButtonContainer from './Buttons/ButtonContainer';
import DatabaseConnector from './Connections';
import DataHandler from './Datahandler';
import DataContainer from './Datashown/DataContainer';
import DayDataContainer from './Datashown/DayDataContainer';
import ExtraData from './ExtraData/ExtraData';
import background from './images/WeatherappBG.jpg'
import WeatherChart from './ExtraData/Charts';
import MiddleChart from './ExtraData/middlewareChart';

/* TODOO
https://www.iconfinder.com/weather-icons?category=weather&price=free&license=gte__2 give credit

*/
class App extends React.Component {
  dataArray=[];
  constructor(props){
      super();
      this.state={
          currentData:{},
          custArray:[],
          dailyArray:[],
          isOn:false,
          showMore:false,
          weatherBool:false,
          location:"",
          dailyData:null,
          currentTimeLocationData:["",""],
          proxyArray:[]

      };
      
  }

  

  componentDidMount=()=>{

}

  setCurrentData=(e)=>{
    this.setState({currentData:e.currentData})
  }


  //gets data from meteos open API using Connections.js and then using the data to create instances of DayDataContainers
  getData=(event, param)=>{
    var data=DatabaseConnector.getInstance().getWeatherData(param[0])
    
    this.setState({location:param[1],isOn:true})
    if(this.state.isOn){
      this.dataArray=[]
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
      var day=date.getDate()
      if(day<10){
        day=0+day.toString()
      }
      if(month1<10){
        month=0+month1.toString()
      }
      var specDate=date.getFullYear()+"-"+month+"-"+day
      this.dataArray.push(<DayDataContainer key={key} locationCords={param[0]} showMoreData={this.getMoreData} date={fulldate} specDate={specDate}  weather={weather} temperature={temperature} precipitation={precipitation} wind={wind}/>);
    }
    this.setState({custArray:this.dataArray});
    })
  }

  //gets more data base on the specific date
  getMoreData=(event,param)=>{
    if((this.state.currentTimeLocationData[0]===this.state.location)&&(this.state.currentTimeLocationData[1]===param[0])&&(this.state.showMore)){

    }else{
    var proxy=[]
    this.setState({weatherBool:false,currentTimeLocationData:[this.state.location,param[0]]})
    var data=DatabaseConnector.getInstance().getDailyWheatherData(param[1],param[0]);

    data.then((result)=>{
      this.setState({weatherBool:false})
      this.setState({dailyData:result,showMore:true,weatherBool:true})
    })
  }
  }

  showLessData=()=>{
    this.setState({showMore:false})
  }

  //used to go back
  goBack=()=>{
    this.setState({isOn:false,showMore:false});
  }

  //src={require(`./images/WeatherappBG.jpg`)}

  render() {
    
    return (<div className="App" >
      <div className='background' style={{ backgroundImage: `url(${background})`  }}>
      <ButtonContainer getData={this.getData} showLessData={this.showLessData} goBack={this.goBack} isOn={this.state.isOn}/>
      <DataContainer getData={this.getData} data={this.state.currentData} showLessData={this.showLessData} location={this.state.location} elements={this.state.custArray} isOff={!this.state.isOn}/>
      <div className='extraData'>
        <ExtraData currentTL={this.state.currentTimeLocationData} weatherBool={this.state.weatherBool} showMore={this.state.showMore} location={this.state.location} dailyData={this.state.dailyData} showLessData={this.showLessData}/>
      </div>
      </div>
  </div>
    );
  }
}

export default App;

