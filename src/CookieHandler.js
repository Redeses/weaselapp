import DataHandler from "./Datahandler";

//holds temp buttonarray
//TODO the storage could be done with redux
export default class CookieHandler {

    static myInstance = null;
    data =[] 

    /**
     * @returns {CookieHandler}
     */
    static getInstance() {
        if (CookieHandler.myInstance == null) {
            CookieHandler.myInstance = new CookieHandler();
               
        }
    
        return this.myInstance;    
    }


        saveArrayAsCookie( locationArray, days) {
            const d = new Date();
            var name="lokaatiot"
            var str1=""
            console.log(locationArray)
            for(var key in locationArray){
                if(key>0){
                    str1+="-"
                }
                str1+=locationArray[key][0][0]+":"+locationArray[key][0][1]+":"+locationArray[key][1]
            }
            d.setTime(d.getTime() + (days*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            var cookie=name + "=" + str1 + ";" + expires + ";path=/";
            console.log("Cookie itself: "+cookie)
            document.cookie = cookie
        }

        getCookie(cookieName) {
            var name = cookieName + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }

        getArrayFromCookies() {
            var buttonSingleDataSetArray = this.getCookie("lokaatiot").split('-');
            var proxyArray=[];
            var trueArray=[]
            console.log(buttonSingleDataSetArray[0])
            if(buttonSingleDataSetArray[0]===''){
                return ''
            }
            for(var key in buttonSingleDataSetArray){
                proxyArray=buttonSingleDataSetArray[key].split(":")
                trueArray.push([[proxyArray[0],proxyArray[1]],proxyArray[2]])
            }
            console.log(trueArray)
            return trueArray
            return DataHandler.getInstance().getButtonArray();
        }


        checkCookie(){
            console.log("checking cookie")
            let lokaatiot = this.getArrayFromCookies("lokaatio");
            if (lokaatiot !== '') {
                console.log("Found")
                //return DataHandler.getInstance().getButtonArray()
              return lokaatiot
            } else {
                console.log("not found")
              return DataHandler.getInstance().getButtonArray()
            } 
    
    
        }


        deleteCookie(){
            document.cookie="lokaatiot= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        }




    
    
    }

    // Example
    
    /*
} */

/*
*/
  

