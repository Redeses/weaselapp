import './AddCity.css';
import React from 'react';
import Popup from 'reactjs-popup';

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
                <button  className='addCityButton' onClick={this.props.goBack}>Lisää kaupunki</button>
                <Popup trigger={<button> Trigger</button>} position="right center">
                    <div>Popup content here !!</div>
                </Popup>
            </div>
        );
      }
  }

export default AddCityButton;