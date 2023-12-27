import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номерПарк: DS.attr('number'),
  услуга: DS.belongsTo('i-i-s-prilozhenie-услуга', { inverse: null, async: false }),
  парковка: DS.belongsTo('i-i-s-prilozhenie-парковка', { inverse: 'паркомат', async: false }),
  шлагбаум: DS.hasMany('i-i-s-prilozhenie-шлагбаум', { inverse: 'паркомат', async: false }),
  терминал: DS.hasMany('i-i-s-prilozhenie-терминал', { inverse: 'паркомат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-паркомат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПарк: {
    descriptionKey: 'models.i-i-s-prilozhenie-паркомат.validations.номерПарк.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-prilozhenie-паркомат.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  парковка: {
    descriptionKey: 'models.i-i-s-prilozhenie-паркомат.validations.парковка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  шлагбаум: {
    descriptionKey: 'models.i-i-s-prilozhenie-паркомат.validations.шлагбаум.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-prilozhenie-паркомат.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаркоматE', 'i-i-s-prilozhenie-паркомат', {
    номерПарк: attr('Номер паркомата', { index: 0 })
  });

  modelClass.defineProjection('ПаркоматL', 'i-i-s-prilozhenie-паркомат', {
    номерПарк: attr('Номер паркомата', { index: 0 })
  });
};
