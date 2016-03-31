import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

// define and export our Layout component
export const Layout = ({content}) => (
    <div>
        <div>{content}</div>
    </div>
);

// define and export our Welcome component
export let NewSignUp = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {name: ''};
    },
    handleSubmit: function(e) {
         e.preventDefault();
         var path = FlowRouter.path("/new/:name", { name: this.state.name });
         FlowRouter.go(path);
    },
    render() {
        return <div className="new-signup">
         <form onSubmit={this.handleSubmit}>
            <input className="new-signup-name" type="text" name="name" placeholder="Brady's Birthday Bash" valueLink={this.linkState('name')} />
            <div className="new-signup-submit">
                <button className="btn btn-success" type="Submit">Let's Go!</button>
            </div>
         </form>
        </div>;
    }    
});

// define and export our Welcome component
export let NewSignUpDetails = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {name: this.props.name};
    },
    handleSubmit: function(e) {
         e.preventDefault();
         console.log("Submit!");
    },
    render() {
        return <div>
         <h1>Signup Details</h1>
         <form type="get" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" valueLink={this.linkState('name')} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Name</label>
                <textarea  className="form-control" id="description" rows="3" valueLink={this.linkState('description')} />
            </div>
            <button className="btn btn-success" type="Submit">Go</button>
         </form>
        </div>;
    }    
});