import React, { Component } from 'react'
import '../App.css'
import CenterNav from '../Components/CenterNav'
import HeaderLogo from '../Components/HeaderLogo'


class App extends Component {
  
  render() {
    const header = <HeaderLogo />
    const centerNav = <CenterNav />
    return (
      <div id='container' className='lg-container'>
        <div id='header-container'>
          {header}
        </div>
        <div id='center-nav-container'>
         {centerNav}
        </div>
      </div>
    );
  }
}

export default App;
