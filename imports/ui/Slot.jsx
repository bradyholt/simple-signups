import React, { Component } from 'react';
import { SlotsData } from '../api/signups.js';

export default class Slot extends Component {
  constructor() {
    super()
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  handleRemove(s) {
    SlotsData.remove(this.props.slot._id);
  }
  
  render() {
    return (
      <tr>
        <td>{this.props.slot.date}</td>
        <td><input ref="assignee" defaultValue={this.props.slot.assignee}/></td>
        <td><input ref="comments" defaultValue={this.props.slot.comments}/></td>
        <td><button className="text-button" onClick={this.handleRemove}>remove</button></td>
      </tr>
    );
  } 
}