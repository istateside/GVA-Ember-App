import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  state: attr('string'),
  city: attr('string'),
  address: attr('string'),
  uid: attr('string'),
  dateAsUtc: attr('string'),
  formattedDate: Ember.computed('dateAsUtc', function() {
    return new Date(this.get('dateAsUtc')).toLocaleDateString();
  }),
  numKilled: attr('number'),
  numInjured: attr('number'),
  numInvolved: Ember.computed('numKilled', 'numInjured', function() {
    return this.get('numKilled') + this.get('numInjured');
  })
});
