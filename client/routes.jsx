import React from 'react';
import {mount, withOptions} from 'react-mounter';

// load Layout and Welcome React components
import {Layout, NewSignUp, NewSignUpDetails} from '../imports/ui/app.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<NewSignUp/>)
    });
  }
});

FlowRouter.route("/new/:name", {
  action(params) {
    mount(Layout, {
        content: (<NewSignUpDetails name={params.name} />)
    });
  }
});