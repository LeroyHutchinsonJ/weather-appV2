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

      if(Icon==="02d")
      {
        weatherTrack = 3;
      }
      if(Icon==="02n")
      {
        weatherTrack = 4;
      }

      if(Icon==="03d")
      {
        weatherTrack = 5;
      }
      if(Icon==="03n")
      {
        weatherTrack = 6;
      }

      if(Icon==="04d")
      {
        weatherTrack = 7;
      }
      if(Icon==="04n")
      {
        weatherTrack = 8;
      }

      if(Icon==="05d")
      {
        weatherTrack = 9;
      }
      if(Icon==="05n")
      {
        weatherTrack = 10;
      }

      if(Icon==="06d")
      {
        weatherTrack = 11;
      }
      if(Icon==="06n")
      {
        weatherTrack = 12;
      }

      if(Icon==="07d")
      {
        weatherTrack = 13;
      }
      if(Icon==="07n")
      {
        weatherTrack = 14;
      }

      if(Icon==="08d")
      {
        weatherTrack = 15;
      }
      if(Icon==="08n")
      {
        weatherTrack = 16;
      }

      if(Icon==="09n")
      {
        weatherTrack = 17;
      }
      if(Icon==="09d")
      {
        weatherTrack = 18;
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

      case 3:
      weatherHold ="fas fa-cloud-sun";
      break;
      case 4:
      weatherHold ="fas fa-cloud-moon";
      break;

      case 5:
      weatherHold ="fas fa-cloud";
      break;
      case 6:
      weatherHold ="fas fa-cloud";
      break;

      case 7:
      weatherHold ="fas fa-cloud-meatball";
      break;
      case 8:
      weatherHold ="fas fa-cloud-meatball";
      break;

      case 9:
      weatherHold ="fas fa-cloud-showers-heavy";
      break;
      case 10:
      weatherHold ="fas fa-cloud-showers-heavy";
      break;

      case 11:
      weatherHold ="fas fa-cloud-rain";
      break;
      case 12:
      weatherHold ="fas fa-cloud-rain";
      break;

      case 13:
      weatherHold ="fas fa-bolt";
      break;
      case 14:
      weatherHold ="fas fa-bolt";
      break;

      case 15:
      weatherHold ="fas fa-snowflake";
      break;
      case 16:
      weatherHold ="fas fa-snowflake";
      break;

      case 17:
      weatherHold ="fas fa-smog";
      break;
      case 18:
      weatherHold ="fas fa-smog";
      break;
    }



    return(<i className = {weatherHold}></i>)
  }
}

export default Icon;
