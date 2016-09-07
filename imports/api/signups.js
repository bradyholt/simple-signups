import { Mongo } from 'meteor/mongo';

export const SignUpsData = new Mongo.Collection('signups');
export const SlotsData = new Mongo.Collection('slots');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('signups', function signupsPub() {
    return SignUpsData.find();
  });
}