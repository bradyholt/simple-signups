import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Slots from './Slots.jsx';
import { Calendar } from 'react-date-range';
import { SignUpsData, SlotsData } from '../api/signups.js';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props.params.id };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    handleBlur(e) {
        let signupSets = {};
        signupSets[e.target.id] = e.target.value;
        SignUpsData.update(this.props.signup._id, {
            $set: signupSets
        });
    }

    handleDateSelect(d) {
        SlotsData.insert({ signupId: this.props.signup._id, date: d.format("YYYY-MM-DD") });
    }

    render() {
        return this.props.signup ? <div className="details" onBlur={this.handleBlur}>
            <h1>Signup</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" id="name" defaultValue={this.props.signup.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Details</label>
                            <textarea className="form-control" rows="3" id="details" defaultValue={this.props.signup.details}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Dates</h2>
                        <div className="calendar">
                            <Calendar onChange={this.handleDateSelect} />
                        </div>
                        <i>Click calendar days above to add signup dates.</i>
                    </div>
                </div>
                <h2>Slots</h2>
                {this.props.isAnySlots ?
                    <Slots slots={this.props.slots} /> :
                    <div className="alert alert-info" role="alert">There are currently no signup slots because no dates have been selected.To add signup slots, click dates on the calendar.</div>}
            </div>
        </div> : <div></div>;
    }
}

export default createContainer(({ params: { id } }) => {
    let signup = SignUpsData.findOne({ id: id });
    let slots = SlotsData.find({ signupId: (signup && signup._id || "") }, { sort: { date: 1 } });

    return {
        signup: signup,
        isAnySlots: (slots && slots.count() > 0),
        slots: slots
    }
}, SignUp);