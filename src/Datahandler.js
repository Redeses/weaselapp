

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

    labels = ['00:00', '01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00',];
    data1 = {
        labels:this.labels,
        datasets: [
          {
            label: '(lumi/räntä/vesi-)Sademäärä (mm)',
            data: [],
            backgroundColor: 'rgb(14, 135, 204)',
            stack: 'Stack 0',
          },
        ],
      };

      data2 = {
        labels:this.labels,
        datasets: [
          {
            label: 'Lämpötila (C)',
            data: [],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
          },
        ],
      };

      data3 = {
        labels:this.labels,
        datasets: [
          {
            label: 'Tuulen nopeus (km/h)',
            data: [],
            backgroundColor: 'rgb(106, 119, 158)',
            fontsize:"40px",
            stack: 'Stack 0',
          },
        ],
      };

    

      

      options = {
        plugins: {
          title: {
            display: true
          },
        },
        responsive: true,
        interaction: {
          mode: 'index' ,
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            
          },
          y: {
            stacked: true,
            ticks: {
              callback: function(value, index, ticks) {
                  return value+'mm';
              }
            }
          },
        },
      };

      options2 = {
        plugins: {
          title: {
            display: true
          },
        },
        responsive: true,
        interaction: {
          mode: 'index' ,
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            
          },
          y: {
            stacked: true,
            ticks: {
              callback: function(value, index, ticks) {
                  return value+'°C';
              }
            }
          },
        },
      };

      options3 = {
        plugins: {
          title: {
            display: true
          },
        },
        responsive: true,
        interaction: {
          mode: 'index' ,
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            
          },
          y: {
            stacked: true,
            ticks: {
              callback: function(value, index, ticks) {
                  return value+'km/h';
              }
            }
          },
        },
      };

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

    getOptions1(){}
    getOptions2(){}
    getOptions3(){}

    getData1(data){
        this.data1.datasets[0].data=data
        
        
        return this.data1
    }
    getData2(data){
        this.data2.datasets[0].data=data
        return this.data2
    }
    getData3(data){
        this.data3.datasets[0].data=data
        return this.data3}

}