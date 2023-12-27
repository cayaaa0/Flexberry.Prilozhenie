import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госНомер: DS.attr('string'),
  водитель: DS.belongsTo('i-i-s-prilozhenie-водитель', { inverse: null, async: false })
});

export let ValidationRules = {
  госНомер: {
    descriptionKey: 'models.i-i-s-prilozhenie-автомобиль.validations.госНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  водитель: {
    descriptionKey: 'models.i-i-s-prilozhenie-автомобиль.validations.водитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвтомобильE', 'i-i-s-prilozhenie-автомобиль', {
    госНомер: attr('Гос номер', { index: 0 })
  });

  modelClass.defineProjection('АвтомобильL', 'i-i-s-prilozhenie-автомобиль', {
    госНомер: attr('Гос номер', { index: 0 })
  });
};
