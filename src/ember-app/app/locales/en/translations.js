import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenieАвтомобильLForm from './forms/i-i-s-prilozhenie-автомобиль-l';
import IISPrilozhenieВодительLForm from './forms/i-i-s-prilozhenie-водитель-l';
import IISPrilozhenieПаркМестоLForm from './forms/i-i-s-prilozhenie-парк-место-l';
import IISPrilozhenieПарковкаLForm from './forms/i-i-s-prilozhenie-парковка-l';
import IISPrilozhenieУслугаLForm from './forms/i-i-s-prilozhenie-услуга-l';
import IISPrilozhenieАвтомобильEForm from './forms/i-i-s-prilozhenie-автомобиль-e';
import IISPrilozhenieВодительEForm from './forms/i-i-s-prilozhenie-водитель-e';
import IISPrilozhenieПаркМестоEForm from './forms/i-i-s-prilozhenie-парк-место-e';
import IISPrilozhenieПарковкаEForm from './forms/i-i-s-prilozhenie-парковка-e';
import IISPrilozhenieУслугаEForm from './forms/i-i-s-prilozhenie-услуга-e';
import IISPrilozhenieАвтомобильModel from './models/i-i-s-prilozhenie-автомобиль';
import IISPrilozhenieВодительModel from './models/i-i-s-prilozhenie-водитель';
import IISPrilozhenieЗапОбУслModel from './models/i-i-s-prilozhenie-зап-об-усл';
import IISPrilozhenieПаркМестоModel from './models/i-i-s-prilozhenie-парк-место';
import IISPrilozhenieПарковкаModel from './models/i-i-s-prilozhenie-парковка';
import IISPrilozhenieПаркоматModel from './models/i-i-s-prilozhenie-паркомат';
import IISPrilozhenieТерминалModel from './models/i-i-s-prilozhenie-терминал';
import IISPrilozhenieУслугаModel from './models/i-i-s-prilozhenie-услуга';
import IISPrilozhenieШлагбаумModel from './models/i-i-s-prilozhenie-шлагбаум';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-автомобиль': IISPrilozhenieАвтомобильModel,
    'i-i-s-prilozhenie-водитель': IISPrilozhenieВодительModel,
    'i-i-s-prilozhenie-зап-об-усл': IISPrilozhenieЗапОбУслModel,
    'i-i-s-prilozhenie-парк-место': IISPrilozhenieПаркМестоModel,
    'i-i-s-prilozhenie-парковка': IISPrilozhenieПарковкаModel,
    'i-i-s-prilozhenie-паркомат': IISPrilozhenieПаркоматModel,
    'i-i-s-prilozhenie-терминал': IISPrilozhenieТерминалModel,
    'i-i-s-prilozhenie-услуга': IISPrilozhenieУслугаModel,
    'i-i-s-prilozhenie-шлагбаум': IISPrilozhenieШлагбаумModel
  },

  'application-name': 'Prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        prilozhenie: {
          caption: 'Prilozhenie',
          title: 'Prilozhenie',
          'i-i-s-prilozhenie-автомобиль-l': {
            caption: 'Автомобиль',
            title: ''
          },
          'i-i-s-prilozhenie-парк-место-l': {
            caption: 'Парк место',
            title: ''
          },
          'i-i-s-prilozhenie-парковка-l': {
            caption: 'Парковка',
            title: ''
          },
          'i-i-s-prilozhenie-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-prilozhenie-водитель-l': {
            caption: 'Водитель',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-автомобиль-l': IISPrilozhenieАвтомобильLForm,
    'i-i-s-prilozhenie-водитель-l': IISPrilozhenieВодительLForm,
    'i-i-s-prilozhenie-парк-место-l': IISPrilozhenieПаркМестоLForm,
    'i-i-s-prilozhenie-парковка-l': IISPrilozhenieПарковкаLForm,
    'i-i-s-prilozhenie-услуга-l': IISPrilozhenieУслугаLForm,
    'i-i-s-prilozhenie-автомобиль-e': IISPrilozhenieАвтомобильEForm,
    'i-i-s-prilozhenie-водитель-e': IISPrilozhenieВодительEForm,
    'i-i-s-prilozhenie-парк-место-e': IISPrilozhenieПаркМестоEForm,
    'i-i-s-prilozhenie-парковка-e': IISPrilozhenieПарковкаEForm,
    'i-i-s-prilozhenie-услуга-e': IISPrilozhenieУслугаEForm
  },

});

export default translations;
