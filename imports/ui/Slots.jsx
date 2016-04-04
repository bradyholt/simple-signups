import React, { Component } from 'react';
import Slot from './Slot.jsx';

export default class Slots extends Component {
  render() {
    return (
      <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Assignee</th>
        <th>Comments</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {
        this.props.slots.map(function(d) {
        return <Slot key={d._id} slot={d} />;
        })
      }
      </tbody>
      </table>
    );
  } 
}

         