

//holds current data shown or selected
export default class CookieHandler {

    static myInstance = null;
    

    /**
     * @returns {DataHandler}
     */
    static getInstance() {
        if (CookieHandler.myInstance == null) {
            CookieHandler.myInstance = new CookieHandler();
            
        }
        

        return this.myInstance;
    }

    

  

}