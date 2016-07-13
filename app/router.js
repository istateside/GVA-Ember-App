import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('incidents', { path: '/' }, function() {
    this.route('incident', { path: "incident/:incident_id" });
  });
});

export default Router;
