import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', { path: '/' }) // implied
  this.route('orders');
  this.route('polls', function() {
    this.route('poll', { path: '/:poll_id' });
  });
});

export default Router;
