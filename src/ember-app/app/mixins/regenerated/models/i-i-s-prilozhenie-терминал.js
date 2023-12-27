import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номерТер: DS.attr('number'),
  паркомат: DS.belongsTo('i-i-s-prilozhenie-паркомат', { inverse: 'терминал', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-терминал.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТер: {
    descriptionKey: 'models.i-i-s-prilozhenie-терминал.validations.номерТер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-prilozhenie-терминал.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТерминалE', 'i-i-s-prilozhenie-терминал', {
    номерТер: attr('Номер тер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('ТерминалL', 'i-i-s-prilozhenie-терминал', {
    номерТер: attr('Номер тер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
