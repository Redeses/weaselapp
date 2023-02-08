import './AddCity.css';
import React from 'react';
import OutsideAlerter from './PopupHook';

//used to bring the front screen back up
class AddCityPopUp extends React.Component {

    /*[["60.17", "24.95"],"Helsinki"],
      [["61.06", "28.19"],"Lappeenranta"],
      [["61.50", "23.80"],"Tampere"],
      [["60.45", "22.28"],"Turku"], */

    constructor(props){
        super(props);
        this.state={
            nimi:"Tampe",
            leveys:"60.00",
            pituus:"24.90"
            /*nimi:"",
            leveys:"",
            pituus:"" */
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    checkIfNameTaken(){
        
        if(this.props.buttons.length===0){
            return false
        }
        for(var key in this.props.buttons){
            if(((this.state.nimi).toLowerCase()===(this.props.buttons[key][1]).toLowerCase())){
                console.log("Nimi on jo käytössä")
                return true
            }else if(((this.state.leveys===this.props.buttons[key][0][0])&&(this.state.pituus===this.props.buttons[key][0][1]))){
                console.log("Coordinaatit on jo käytössä")
                return true
            }

        }
        return false
    }

    addButton=(e)=>{
        e.preventDefault();
        if(this.checkIfNameTaken()){
            //alert();
        }else{
            this.props.addToButtons([[this.state.leveys,this.state.pituus],this.state.nimi])
            this.props.closed()
        }

    }

    handleChange_Name=(e)=>{
        e.preventDefault()
        this.setState({nimi:e.target.value})
    }

    coordinateValidation1=(e)=>{
        e.preventDefault()
        var x= e.target.value
        if(e.target.value.length===3){
            x=this.quickCheck(e.target.value,this.state.leveys.length)
        }
        this.setState({leveys:x})
    }
    
    quickCheck=(text,compare)=>{
        if(text.length<compare){
            return text.slice(0,-1)        
    
        }else if(text.length>compare){
            return text.slice(0,-1)+"."+text.slice(-1)
        }
        return text
      }
    
    coordinateValidation2=(e)=>{
        e.preventDefault()
        var x= e.target.value
        if(e.target.value.length===3){
            x=this.quickCheck(e.target.value,this.state.pituus.length)
        }
        this.setState({pituus:x})
    }

    render() {
        return (
            <OutsideAlerter>
            <div className="popUpContainer">
                <div className='popUp'>
                <form className='newUserForm'  id='form1' >
                <label>Nimi</label> 
                    <input type="text"  key={"name"} value={this.state.nimi} onChange={this.handleChange_Name} />
                <label>leveysaste</label>
                    <input type="text"  key={"Latitude"} value={this.state.leveys} maxLength={5}  onChange={this.coordinateValidation1}/>
                     
                <label>pituusaste</label>
                    <input type="text"  key={"Longitude"} value={this.state.pituus} maxLength={5}  onChange={this.coordinateValidation2}/>
                        
                    <input type="submit" value="Lisää kaupunki" id="submitButton" onClick={this.addButton}/>

                </form>
                </div>
            </div>
            </OutsideAlerter>
        );
      }
  }

export default AddCityPopUp;

