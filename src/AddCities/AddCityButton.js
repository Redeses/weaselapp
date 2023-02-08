import './AddCity.css';
import React from 'react';
import Popup from 'reactjs-popup';
import AddCityPopUp from './AddCityPopUp';

//used to bring the front screen back up
class AddCityButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    
    
    render() {
        return (
            <div className="addCityButtonContainer">
                <Popup className='addCityButton' trigger={<button>Lisää kaupunki</button>} position="center center">
                {close =>(<AddCityPopUp closed={close} buttons={this.props.buttons} addToButtons={this.props.addToButtons}/>)}
                    
                </Popup>
            </div>
        );
      }
  }

export default AddCityButton;