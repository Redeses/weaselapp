import './AddCity.css';
import React from 'react';
import OutsideAlerter from './PopupHook';

//used to bring the front screen back up
class AddCityPopUp extends React.Component {


    constructor(props){
        super(props);
        this.state={
            nimi:"",
            leveys:"",
            pituus:""
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    addButton=(e)=>{
        e.preventDefault()
    }

    handleChange_Name=()=>{
        
    }

    coordinateValidation1=()=>{

    }
    
    
    coordinateValidation2=()=>{
        
    }

    render() {
        return (
            <OutsideAlerter>
            <div className="popUpContainer">
                <div className='popUp'>
                <form className='newUserForm'  id='form1' >
                <label>Nimi</label> 
                    <input type="text"  key={"name"} value={this.state.name} onChange={this.handleChange_Name} />
                <label>leveysaste</label>
                    <input type="text"  key={"email"} value={this.state.leveys} maxLength={2}  onChange={this.coordinateValidation1} />
                <label>pituusaste</label>
                    <input type="email"  key={"email"} value={this.state.pituus} maxLength={2}  onChange={this.coordinateValidation2} />

                    <input type="submit" value="Make a new user" id="submitButton" onClick={this.handleSubmit}/>

                </form>
                </div>
            </div>
            </OutsideAlerter>
        );
      }
  }

export default AddCityPopUp;

