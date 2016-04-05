import React, { Component } from 'react';
import moment from 'moment';
import { SlotsData } from '../api/signups.js';

export default class Slot extends Component {
  constructor() {
    super()
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  handleRemove(s) {
    SlotsData.remove(this.props.slot._id);
  }
  
  formatDate(d) {
    return moment(d).format("MM/DD/YYYY");
  }
  
  handleBlur(e) {
    let slotSets = {};
    slotSets[e.target.id] = e.target.value;
    SlotsData.update(this.props.slot._id, {
      $set: slotSets
    });
    e.stopPropagation();
  }
  
  render() {
    return (
      <tr>
        <td>{this.formatDate(this.props.slot.date)}</td>
        <td><input id="name" defaultValue={this.props.slot.name} onBlur={this.handleBlur}/></td>
        <td><input id="email" defaultValue={this.props.slot.email} onBlur={this.handleBlur}/></td>
        <td><input id="comments" defaultValue={this.props.slot.comments} onBlur={this.handleBlur}/></td>
        <td><button className="btn btn-default" onClick={this.handleRemove}>remove</button></td>
      </tr>
    );
  } 
}