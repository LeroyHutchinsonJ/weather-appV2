import React from 'react';
import Temp from "./Temp";
import CityName from "./CityName";
import Icon from "./Icon";
class App extends React.Component {

  render() {

    return <div className = "appHeader"> <Temp/><Icon/> <CityName/></div>;
  }
}
export default App;
