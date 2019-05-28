import React from "react";
import "./CityName.css"

class CityName extends React.Component{
  state = {
    Name: ""
  }
  getName = async() =>{
    //put url in a variable
    var url = "http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=faa738d76a8ffaa97bfcdfd989c9eb41";

    //fetch the data from the url
    var response = await fetch(url);

    //turn the data into a json
    var json = await response.json();

    //set the data to state in class
    this.setState({Name:json.name})
  }
  componentDidMount = () =>{
    setTimeout(this.getName, 50);
  }

  render(){
    var {Name} = this.state;
    return(<div>{Name}</div>)
  }
}

export default CityName;
