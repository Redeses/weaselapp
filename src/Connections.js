

export default class DatabaseConnector {
    url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"

    static myInstance = null;

    /**
     * @returns {DatabaseConnector}
     */


    static getInstance() {
        if (DatabaseConnector.myInstance == null) {
            DatabaseConnector.myInstance = new DatabaseConnector();
        }

        return this.myInstance;
    }

 /*HELSINKI: 60.17°N, 24.95°E
TURKU: 60.45°N, 22.28°E
TAMPERE: 61.50°N, 23.80°E*/
    async getWeatherData(locationData){
        
        var url="https://api.open-meteo.com/v1/forecast?latitude="+locationData[0]+"&longitude="+locationData[1]+"&timezone=GMT&daily=apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,weathercode"
        const response = await fetch(url).then((response) => response.json()).catch(err=> err);
        console.log(response.daily)
        console.log(response)
        return response
    }

    async getDailyWheatherData(){

    }


}