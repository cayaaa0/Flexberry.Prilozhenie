import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  положение: DS.attr('i-i-s-prilozhenie-положения'),
  парковка: DS.belongsTo('i-i-s-prilozhenie-парковка', { inverse: 'шлагбаум', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-шлагбаум.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  положение: {
    descriptionKey: 'models.i-i-s-prilozhenie-шлагбаум.validations.положение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  парковка: {
    descriptionKey: 'models.i-i-s-prilozhenie-шлагбаум.validations.парковка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ШлагбаумE', 'i-i-s-prilozhenie-шлагбаум', {
    адрес: attr('Адрес', { index: 0 }),
    положение: attr('Положение', { index: 1 })
  });

  modelClass.defineProjection('ШлагбаумL', 'i-i-s-prilozhenie-шлагбаум', {
    адрес: attr('Адрес', { index: 0 }),
    положение: attr('Положение', { index: 1 })
  });
};
