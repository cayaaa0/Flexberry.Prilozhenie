import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('string'),
  наименование: DS.attr('i-i-s-prilozhenie-услуги'),
  номерУсл: DS.attr('number'),
  стоимость: DS.attr('i-i-s-prilozhenie-стоимость'),
  запОбУсл: DS.hasMany('i-i-s-prilozhenie-зап-об-усл', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-prilozhenie-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерУсл: {
    descriptionKey: 'models.i-i-s-prilozhenie-услуга.validations.номерУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-prilozhenie-услуга.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  запОбУсл: {
    descriptionKey: 'models.i-i-s-prilozhenie-услуга.validations.запОбУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-prilozhenie-услуга', {
    номерУсл: attr('Номер усл', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-prilozhenie-услуга', {
    номерУсл: attr('Номер усл', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });
};
