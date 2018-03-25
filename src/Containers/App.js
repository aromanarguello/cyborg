import React, { Component } from 'react'
import '../App.css'
import CenterNav from '../Components/CenterNav/CenterNav'
import HeaderLogo from '../Components/Header/HeaderLogo'
import InfoBoxes from '../Components/InfoBoxes/InfoBoxes'


class App extends Component {
  
  render() {
    const header = <HeaderLogo />
    const centerNav = <CenterNav />
    const infoBoxes = <InfoBoxes />
    return (
      <div id='container' className='lg-container'>
        <div id='header-container'>
          {header}
        </div>
        <div id='center-nav-container'>
          {centerNav}
        </div>
        <div id='info-boxes-container'>
          {infoBoxes}
        </div>
      </div>
    );
  }
}

export default App;
