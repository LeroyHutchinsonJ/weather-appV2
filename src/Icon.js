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
      var weatherTrack = 0;
      var weatherHold = "";

      //This sets each value of the weather to a numeric number
      if(Icon==="01d")
      {
        weatherTrack = 1;
      }
      if(Icon==="01n")
      {
        weatherTrack = 2;
      }


      //this uses the numeric number to pick out the picture that each weather pattern will have
    switch(weatherTrack)
    {
      case 1:
      weatherHold ="fas fa-sun";
      break;
      case 2:
      weatherHold ="fas fa-moon";
      break;
    }



    return(<i className = {weatherHold}></i>)
  }
}

export default Icon;
