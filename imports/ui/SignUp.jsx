import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Slots from './Slots.jsx';
import { Calendar } from 'react-date-range';
import { SignUpsData, SlotsData } from '../api/signups.js';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.params.name};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    SignUpsData.update(this.props.signup._id, {
      $set: { description: this.refs.description.value }
    });
  }
  
  handleDateSelect(d) {
    SlotsData.insert({ signupId: this.props.signup._id, date: d.toJSON()});
  }
  
  render() {
    return <div className="details">
        <h1>Signup Details</h1>
        <form type="get" onSubmit={this.handleSubmit}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6"> 
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" type="text" id="name" defaultValue={this.props.signup.name} />
              </div>
              <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" ref="description" defaultValue={this.props.signup.description} rows="3"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="calendar">
              <Calendar onInit={this.handleDateSelect} onChange={this.handleDateSelect} />
              </div>
            </div>
          </div>
          <h2>Slots</h2>
           {this.props.isAnySlots ? <Slots slots={this.props.slots} /> : ''}
          <button className="btn btn-success btn-lg" type="Submit">Save</button>
        </div>
        </form>
    </div>;
  } 
}

export default createContainer(({ params: { name } }) => {
  let signup = SignUpsData.findOne({ name: name });
    if (!signup) {
      signup = { name: name };
      SignUpsData.insert(signup);
    }
    
  let slots = SlotsData.find({ signupId: signup._id })
    
  return {
    signup: signup,
    isAnySlots: slots.count() > 0,
    slots: slots.fetch()
  };
}, SignUp);