

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

    async getWeatherData(locationData){
        
        var url="https://api.open-meteo.com/v1/forecast?latitude="+locationData[0]+"&longitude="+locationData[1]+"&timezone=GMT&daily=apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,weathercode"
        const response = await fetch(url).then((response) => response.json()).catch(err=> err);
        return response
    }

    async getDailyWheatherData(locationData){
        var url="https://api.open-meteo.com/v1/forecast?latitude="+locationData[0]+"&longitude="+locationData[1]+"&timezone=GMT&daily=apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,weathercode"
        const response = await fetch(url).then((response) => response.json()).catch(err=> err);
        return response
    }


}