import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap';

export default class Schedule extends Component {
    render() {
      return (
        <Table bordered className='schedule'>
          <thead>
            <tr>
              <th>Sucursal</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Central</th>
              <td>6:30 AM - 5:00 PM</td>
            </tr>
            <tr>
              <th scope="row">Crt. Sur</th>
              <td>6:30 AM - 5:00 PM</td>
            </tr>
            <tr>
              <th scope="row">Jean Paul</th>
              <td>6:30 AM - 5:00 PM</td>
            </tr>
            <tr>
              <th scope="row">Crt. A Masaya</th>
              <td>6:30 AM - 5:00 PM</td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }