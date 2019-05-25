import React from 'react';
import './App.css';

class App extends React.Component {
  //Something to hold the weather data
  state = {
    weatherData: [],
    weatherName: ""
  };

  getWeatherData = async() =>{
    var url =
      "http://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=faa738d76a8ffaa97bfcdfd989c9eb41";

    var response = await fetch(url);

    var json = await response.json();

    //Adding the json object to the weather data array
    this.setState({
        weatherData: json.weather, weatherName: json.name
    })
  }
  componentDidMount = () => {

    setTimeout(this.getWeatherData, 10);
    console.log(this.state.weatherData);
  };

  render() {
    var {weatherData,weatherName} = this.state;
    return <div className = "appHeader">{weatherData.map((weather) => <div key = {1}>{weatherName} {weather.description}</div>)}</div>;
  }
}
export default App;
