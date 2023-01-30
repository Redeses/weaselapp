
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
          showMore:false,
          location:"",
          dailyData:null,
          currentTimeLocationData:["",""]

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
    this.setState({showMore:false,currentTimeLocationData:[this.state.location,param[0]]})
    var data=DatabaseConnector.getInstance().getDailyWheatherData(param[1],param[0]);

    data.then((result)=>{
      console.log(result)
      this.setState({dailyData:result,showMore:true})
    })
  }

  showLessData=()=>{
    this.setState({showMore:false})
  }

  //used to go back
  goBack=()=>{
    console.log("this.goBack")
    this.setState({isOn:false,showMore:false});
  }


  render() {
    
    return (<div className="App">
      <h1 className='appName'></h1>
      <ButtonContainer getData={this.getData} showLessData={this.showLessData} goBack={this.goBack} isOn={this.state.isOn}/>
      <DataContainer getData={this.getData} data={this.state.currentData} showLessData={this.showLessData} location={this.state.location} elements={this.state.custArray} isOff={!this.state.isOn}/>
      <ExtraData currentTL={this.state.currentTimeLocationData} showMore={this.state.showMore} location={this.state.location} dailyData={this.state.dailyData} showLessData={this.showLessData}/>
  </div>
    );
  }
}

export default App;

