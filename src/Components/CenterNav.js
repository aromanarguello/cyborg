import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './CenterNavBar'
import Schedule from './CenterNavLeft'



export default class CenterNav extends Component {
render() {
    return (
        <div className='navbar'>
            <NavBar />
            <Schedule />
        </div>
        );
    }
}
