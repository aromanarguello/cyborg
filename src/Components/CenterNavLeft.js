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
              <td></td>
            </tr>
            <tr>
              <th scope="row">Crt. Sur</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Jean Paul</th>
              <td></td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }