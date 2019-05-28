import React from "react";
import './Icon.css'

class Icon extends React.Component{
  state = {
    Weather:[],
    Icon:""
  }



  getIcon = async() =>{
    //Put the url in a variable
    var url =
      "http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=faa738d76a8ffaa97bfcdfd989c9eb41&units=imperial";

    //Use fetch to get the information from the url
    var response = await fetch(url);

    //Use json.() to turn the fetched data into json
    var json = await response.json();

    //Set the data to temp
    await this.setState({Weather:json.weather});

    this.setState({Icon: this.state.Weather[0].icon})
  }

  componentDidMount = () =>{
    this.getIcon();
  }
  render(){
      var {Weather,Icon} = this.state;
      var img = "http://openweathermap.org/img/w/01n.png"
    return(<img src = {`http://openweathermap.org/img/w/${Icon}.png`}></img>)
  }
}

export default Icon;
