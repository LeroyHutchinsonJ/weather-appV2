import React from 'react';
import './App.css';

class App extends React.Component {
  //Something to hold the weather data
  state = {
    weatherData: []
  };

  getWeatherData = async() =>{
    var url =
      "http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=faa738d76a8ffaa97bfcdfd989c9eb41";

    var response = await fetch(url);

    var json = await response.json();

    //Adding the json object to the weather data array
    this.setState({
        weatherData:[...this.state.weatherData, json]
    })
  }
  componentDidMount = () => {

    setTimeout(this.getWeatherData, 10);

  };

  render() {
    var {weatherData} = this.state;
    return <div className = "appHeader"></div>;
  }
}
export default App;
