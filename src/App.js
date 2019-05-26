import React from 'react';
import './App.css';
import Temp from "./Temp";
import CityName from "./CityName"
class App extends React.Component {

  render() {

    return <div className = "appHeader"> <Temp/> <CityName/></div>;
  }
}
export default App;
