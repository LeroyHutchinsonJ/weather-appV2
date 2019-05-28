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
    setTimeout(this.getIcon, 50);
  }
  render(){
      var {Weather,Icon} = this.state;
    return(<div>{Icon}</div>)
  }
}

export default Icon;
