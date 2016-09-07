import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { SignUpsData } from '../api/signups.js';

export class NewSignUp extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let signup = SignUpsData.findOne({ name: this.refs.name.value });
    if (!signup) {
        newId = Math.random().toString(36).slice(-10);
        signup = {
            id: newId,
            name: this.refs.name.value
        };
      SignUpsData.insert(signup);
    }
      
    browserHistory.push(`/${signup.id}`);
  }
  
  render() {
    return <div className="new-signup">
      <input className="new-signup-name" autoFocus type="text" name="name" placeholder="Brady's Birthday Bash" ref="name" />
      <div className="new-signup-submit">
          <button className="btn btn-success" onClick={this.handleClick} type="submit">Let's Go!</button>
      </div>
    </div>;
  }    
}