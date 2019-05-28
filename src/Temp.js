import React from "react"
import './Temp.css';


class Temp extends React.Component {
state = {
Temp: 0
}
  getTemp = async() =>{
    //Put the url in a variable
    var url =
      "http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=faa738d76a8ffaa97bfcdfd989c9eb41&units=imperial";

    //Use fetch to get the information from the url
    var response = await fetch(url);

    //Use json.() to turn the fetched data into json
    var json = await response.json();

    //Set the data to temp
    this.setState({Temp:json.main.temp});
  }

  //Set a timer with componentDidMount
   componentDidMount = () =>{
     this.getTemp();
   }
  render(){
    var {Temp} = this.state;
    return(<div className = "temp">{Temp}</div>)
  }
}

export default Temp;
