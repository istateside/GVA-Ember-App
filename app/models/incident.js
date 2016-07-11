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
  numInvolved: Ember.computed('numKilled', 'numInjured', () => numKilled + numInjured),
  numKilledArray: Ember.computed('numKilled', () => Array.new(numKilled)),
  numInjuredArray: Ember.computed('numInjured', () => Array.new(numInjured)),
  numInvolvedArray: Ember.computed('numInvolved', () => Array.new(numInvolved))
});
