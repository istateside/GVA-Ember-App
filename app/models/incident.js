import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  state: attr('string'),
  city: attr('string'),
  address: attr('string'),
  uid: attr('string'),
  date_as_utc: attr('string'),
  numKilled: attr('number'),
  numInjured: attr('number'),
  numInvolved: Ember.computed('numKilled', 'numInjured', function() {
    return this.get('numKilled') + this.get('numInjured');
  }),
  numKilledArray: Ember.computed('numKilled', function() {
    return new Ember.Array(this.get('numKilled'));
  }),
  numInjuredArray: Ember.computed('numInjured', function() {
    return new Array(this.get('numInjured'));
  }),
  numInvolvedArray: Ember.computed('numInvolved', function() {
    return new Array(this.get('numInvolved'));
  })
});
