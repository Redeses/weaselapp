

//holds current data shown or selected
export default class DataHandler {

    static myInstance = null;



    /**
     * @returns {DataHandler}
     */
    static getInstance() {
        if (DataHandler.myInstance == null) {
            DataHandler.myInstance = new DataHandler();
        }

        return this.myInstance;
    }


    parseData(data){
        return 0;
    }

}