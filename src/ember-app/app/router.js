import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-автомобиль-l');
  this.route('i-i-s-prilozhenie-автомобиль-e',
  { path: 'i-i-s-prilozhenie-автомобиль-e/:id' });
  this.route('i-i-s-prilozhenie-автомобиль-e.new',
  { path: 'i-i-s-prilozhenie-автомобиль-e/new' });
  this.route('i-i-s-prilozhenie-водитель-l');
  this.route('i-i-s-prilozhenie-водитель-e',
  { path: 'i-i-s-prilozhenie-водитель-e/:id' });
  this.route('i-i-s-prilozhenie-водитель-e.new',
  { path: 'i-i-s-prilozhenie-водитель-e/new' });
  this.route('i-i-s-prilozhenie-парк-место-l');
  this.route('i-i-s-prilozhenie-парк-место-e',
  { path: 'i-i-s-prilozhenie-парк-место-e/:id' });
  this.route('i-i-s-prilozhenie-парк-место-e.new',
  { path: 'i-i-s-prilozhenie-парк-место-e/new' });
  this.route('i-i-s-prilozhenie-парковка-l');
  this.route('i-i-s-prilozhenie-парковка-e',
  { path: 'i-i-s-prilozhenie-парковка-e/:id' });
  this.route('i-i-s-prilozhenie-парковка-e.new',
  { path: 'i-i-s-prilozhenie-парковка-e/new' });
  this.route('i-i-s-prilozhenie-услуга-l');
  this.route('i-i-s-prilozhenie-услуга-e',
  { path: 'i-i-s-prilozhenie-услуга-e/:id' });
  this.route('i-i-s-prilozhenie-услуга-e.new',
  { path: 'i-i-s-prilozhenie-услуга-e/new' });
});

export default Router;
