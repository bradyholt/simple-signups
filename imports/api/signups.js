import { Mongo } from 'meteor/mongo';

export const SignUpsData = new Mongo.Collection('signups');
export const SlotsData = new Mongo.Collection('slots');