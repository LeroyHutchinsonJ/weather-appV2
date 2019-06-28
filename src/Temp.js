import React from "react"
import './Temp.css';


class Temp extends React.Component {
state = {
Temp: 0
}
  getTemp = async() =>{
    //Put the url in a variable
    var url =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2a92bc59e2d13645bab00453d987b25d/40.647208899999995,-73.9512852";

    //Use fetch to get the information from the url
      var response = await fetch(url);

    //Use json.() to turn the fetched data into json
    var json = await response.json();

    //Set the data to temp
      this.setState({ Temp: json.currently.temperature });
      
  }

  
   componentDidMount = () =>{
     this.getTemp();
   }
  render(){
    var {Temp} = this.state;
    return(<div className = "temp">{Temp}</div>)
  }
}

export default Temp;
