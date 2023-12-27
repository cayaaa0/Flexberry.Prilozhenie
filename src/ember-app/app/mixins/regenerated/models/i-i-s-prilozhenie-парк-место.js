import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-prilozhenie-статусы')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-prilozhenie-парк-место.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-prilozhenie-парк-место.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-prilozhenie-парк-место.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаркМестоE', 'i-i-s-prilozhenie-парк-место', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    адрес: attr('Адрес', { index: 2 })
  });

  modelClass.defineProjection('ПаркМестоL', 'i-i-s-prilozhenie-парк-место', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    адрес: attr('Адрес', { index: 2 })
  });
};
