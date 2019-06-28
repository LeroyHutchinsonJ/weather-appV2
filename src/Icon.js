import React from "react";
import './Icon.css'

class Icon extends React.Component{
  state = {
    Icon:""
  }



  getIcon = async() =>{
    //Put the url in a variable
    var url =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2a92bc59e2d13645bab00453d987b25d/40.647208899999995,-73.9512852";

    //Use fetch to get the information from the url
    var response = await fetch(url);

    //Use json.() to turn the fetched data into json
    var json = await response.json();

      this.setState({ Icon: json.currently.icon });
  }

  componentDidMount = () =>{
    this.getIcon();
  }
  render(){
      var {Icon} = this.state;
      var weatherTrack = 0;
      var weatherHold = "";

      //This sets each value of the weather to a numeric number
      if(Icon==="clear-day")
      {
        weatherTrack = 1;
      }
      if(Icon==="clear-night")
      {
        weatherTrack = 2;
      }

      if(Icon==="partly-cloudy-day")
      {
        weatherTrack = 3;
      }
      if(Icon==="partly-cloudy-night")
      {
        weatherTrack = 4;
      }

      if(Icon==="cloudy")
      {
        weatherTrack = 5;
      }
      if(Icon==="rain")
      {
        weatherTrack = 6;
      }    
      if(Icon==="thunderstorm")
      {
        weatherTrack = 7;
      }
      if(Icon==="snow")
      {
        weatherTrack = 8;
      }
      if(Icon==="fog")
      {
        weatherTrack = 9;
      }
    
    //this uses the numeric number to pick out the picture that each weather pattern will have
    switch(weatherTrack)
    {
      case 1:
      weatherHold ="fas fa-sun fa-10x";
            break;

      case 2:
      weatherHold ="fas fa-moon fa-10x";
            break;

      case 3:
      weatherHold ="fas fa-cloud-sun fa-10x";
            break;

      case 4:
      weatherHold ="fas fa-cloud-moon fa-10x";
            break;

      case 5:
      weatherHold ="fas fa-cloud fa-10x";
            break;

      case 6:
      weatherHold ="fas fa-cloud-showers-heavy fa-10x";
            break;

      case 7:
      weatherHold ="fas fa-bolt fa-10x";
            break;

      case 8:
      weatherHold ="fas fa-snowflake fa-10x";
            break;

      case 9:
      weatherHold ="fas fa-smog fa-10x";
            break;
    }



      return (<i className={weatherHold}></i>)
  }
}

export default Icon;
