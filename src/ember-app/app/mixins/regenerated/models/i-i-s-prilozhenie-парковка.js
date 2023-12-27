import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номПарковки: DS.attr('number'),
  паркомат: DS.hasMany('i-i-s-prilozhenie-паркомат', { inverse: 'парковка', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-парковка.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номПарковки: {
    descriptionKey: 'models.i-i-s-prilozhenie-парковка.validations.номПарковки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-prilozhenie-парковка.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПарковкаE', 'i-i-s-prilozhenie-парковка', {
    номПарковки: attr('Ном парковки', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('ПарковкаL', 'i-i-s-prilozhenie-парковка', {
    номПарковки: attr('Ном парковки', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
