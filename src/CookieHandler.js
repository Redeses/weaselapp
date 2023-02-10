

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


        /*var arr = ['foo', 'bar', 'baz'];
var json_str = JSON.stringify(arr);
createCookie('mycookie', json_str); */


        /* var json_str = getCookie('mycookie');
var arr = JSON.parse(json_str);*/


        function saveArrayAsCookie( locationArray, days) {
            const d = new Date();
            var name="lokaatiot"
            var json_str = JSON.stringify(locationArray);
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = name + "=" + json_str + ";" + expires + ";path=/";
        }

        function getArrayFromCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
        }


        function checkCookie() {
            let user = getCookie("username");
            if (user != "") {
              alert("Welcome again " + user);
            } else {
              user = prompt("Please enter your name:", "");
              if (user != "" && user != null) {
                setCookie("username", user, 365);
              }
            } 
    
    
    
        return this.myInstance;
    
    
    }

    // Example
    
    /*
} */

/*
*/
  

}