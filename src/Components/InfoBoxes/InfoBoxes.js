import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InteractiveGrids from './Boxes'

export default class InfoBoxes extends Component {
    render() {
        const style = {
            padding: '10px 0 0 0',
            height: '200px'
        }

        return (
            <div id="infoboxes-container">
                <InteractiveGrids style={style}/>
                <InteractiveGrids style={style}/>
                <InteractiveGrids style={style}/>
            </div>
        )
    }
}