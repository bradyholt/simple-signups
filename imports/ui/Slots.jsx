import React, { Component } from 'react';
import Slot from './Slot.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Slots extends Component {
  render() {
    return (
      <table className="table table-striped table-hover">
      <thead>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comments</th>
        <th></th>
      </tr>
      </thead>
      <ReactCSSTransitionGroup component="tbody" transitionName="slots" transitionEnterTimeout={1000} transitionLeaveTimeout={1}>
      {
        this.props.slots.map(function(d) {
        return <Slot key={d._id} slot={d} />;
        })
      }
      </ReactCSSTransitionGroup>
      </table>
    );
  } 
}

         