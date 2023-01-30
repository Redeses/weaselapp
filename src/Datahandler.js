

//holds current data shown or selected
export default class DataHandler {

    static myInstance = null;
    

   array=[            [0, "Clear sky", "CS.jpg"],
   [1,"Mainly clear","MC.jpg"],
   [2, "partly cloudy", "PC.jpg"],
   [3, "overcast","overC.jpg"],
   [45, "Fog","fog.jpg"],
   [48, "depositing rime fog","drFog.jpg"],
   [51, "Drizzle: Light" ,"DrizL.jpg"],
   [53, "Drizzle: Moderate","DrizM.jpg"], 
   [55, "Drizzle:  dense intensity","DrizDens.jpg"],
   [56, "Freezing Drizzle: Light ","freDrizL.jpg"],
   [57, "Freezing Drizzle: dense intensity","freDrizDens.jpg"],
   [61, "Rain: Slight","rainS.jpg"],
   [63, "Rain: Moderate","rainsM.jpg"],
   [65, "Rain:  heavy intensity","rainH.jpg"],
   [66, "Freezing Rain: Light","frezRainL.jpg"],
   [67, "Freezing Rain:heavy intensity","frezRainH.jpg"],
   [71, "Snow fall: Slight","snowS.jpg"],
   [73, "Snow fall: moderate","snowL.jpg"],
   [75, "Snow fall: heavy intensity","snowH.jpg"],
   [77, "Snow grains","snowGrain.jpg"],
   [80, "Rain showers: Slight","rainShowerS.jpg"],
   [81, "Rain showers: moderate","rainShowerM.jpg"],
   [82, "Rain showers: violent","rainShowerV.jpg"],
   [85, "Snow showers slight","snowShowerS.jpg"],
   [86, "Snow showers heavy","snowShowerH.jpg"],
   [95, "Thunderstorm: Slight or moderate","ThunderS_SM.jpg"],
   [96, "Thunderstorm with slight hail","thunderS_slightH.jpg"],
   [99, "Thunderstorm with heavy hail","thunderS_heavyH.jpg"]];

    /**
     * @returns {DataHandler}
     */
    static getInstance() {
        if (DataHandler.myInstance == null) {
            DataHandler.myInstance = new DataHandler();
            
        }

        return this.myInstance;
    }

    
    getWeatherCode(){
        return [
            [0, "Clear sky", "CS.png"],
            [1,"Mainly clear","MC.png"],
            [2, "Partly cloudy", "PC.png"],
            [3, "Overcast","overC.png"],
            [45, "Fog","fog.png"],
            [48, "Depositing rime fog","drFog.png"],
            [51, "Light drizzle" ,"DrizL.png"],
            [53, "Moderate drizzle","DrizM.png"], 
            [55, "Dense intensity drizzle","DrizDens.png"],
            [56, "Light freezing drizzle","freDrizL.png"],
            [57, "Dense intensity freezing drizzle","freDrizDens.png"],
            [61, "Slight rain","rainS.png"],
            [63, "Moderate Rain","rainM.png"],
            [65, "Heavy intensity rain","rainH.png"],
            [66, "Light freezing rain","frezRainL.png"],
            [67, "Heavy instensity freezing rain","frezRainH.png"],
            [71, "Slight snow fall","snowS.jpg"],
            [73, "Moderate snow fall","snowM.png"],
            [75, "Heavy intensity snow fall","snowH.png"],
            [77, "Snow grains","snowGrain.png"],
            [80, "Slight rain showers","rainShowerS.png"],
            [81, "Moderate rain showers","rainShowerM.png"],
            [82, "Violent rain showers","rainShowerV.png"],
            [85, "Slight snow showers","snowShowerS.png"],
            [86, "Heavy snow showers","snowShowerH.png"],
            [95, "Slight or moderate thunderstorm","ThunderS_SM.jpg"],
            [96, "Thunderstorm with slight hail","thunderS_slightH.jpg"],
            [99, "Thunderstorm with heavy hail","thunderS_heavyH.jpg"]];
    }
  




    parseData(data){
        return 0;
    }/*if(code===this.array[key][0]){
                console.log(this.array[key][0])
            } */

    //returns the name
    getweatherImageName(code){
        console.log(code)
        for(var i=0;i<this.array.length;i++){
            if(this.array[i][0]===code){
                console.log(this.array[i][2])
                return this.array[i]
            }           
        }
        return ""
    }

}