

//holds current data shown or selected
export default class DataHandler {

    static myInstance = null;
    

   array=[
    [0, "Selkeä taivas", "CS.png"],
    [1,"Pääosin selkeää","MC.png"],
    [2, "Puolipilvistä", "PC.png"],
    [3, "Pilvinen","overC.png"],
    [45, "Sumua","fog.png"],
    [48, "Huurretta","drFog.png"],
    [51, "Kevyt tihkusade" ,"DrizL.png"],
    [53, "Kohtalainen tihkusade","DrizM.png"], 
    [55, "Tiheä tihkusade","DrizDens.png"],
    [56, "Kevyt jäätävä tihkusade","freDrizL.png"],
    [57, "Tiheä jäätävä tihkusade","freDrizDens.png"],
    [61, "Kevyt sade","rainS.png"],
    [63, "Kohtalainen sade","rainM.png"],
    [65, "Tiheä sade","rainH.png"],
    [66, "Kevyt jäätävä sade","frezRainL.png"],
    [67, "Tiheä jäätävä sade","frezRainH.png"],
    [71, "Kevyt lumisade","snowS.png"],
    [73, "Kohtalainen lumisade","snowM.png"],
    [75, "Tiheä lumisade","snowH.png"],
    [77, "Lumijyväsade","snowGrain.png"],
    [80, "lieviä sadekuuroja","rainShowerS.png"],
    [81, "Kohtalaisia sadekuuroja","rainShowerM.png"],
    [82, "Rajuja sadekuuroja","rainShowerV.png"],
    [85, "Lieviä lumisateita","snowShowerS.png"],
    [86, "Rajuja lumisateita","snowShowerH.png"],
    [95, "Kevyit tai kohtalainen ukkosmyrsky","ThunderS_SM.png"],
    [96, "Ukkosmyrsky ja kevyesti rakeita","thunderS_slightH.png"],
    [99, "Ukkosmyrsky ja tiheästi rakeita","thunderS_heavyH.png"]];

    /**
     * @returns {DataHandler}
     */
    static getInstance() {
        if (DataHandler.myInstance == null) {
            DataHandler.myInstance = new DataHandler();
            
        }

        return this.myInstance;
    }

    

  
    //returns the name of picture and the description
    getweatherImageName(code){
        for(var i=0;i<this.array.length;i++){
            if(this.array[i][0]===code){
                return this.array[i]
            }           
        }
        return ""
    }

}