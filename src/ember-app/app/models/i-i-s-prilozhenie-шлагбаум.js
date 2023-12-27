import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ШлагбаумMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-шлагбаум';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ШлагбаумMixin, Validations, {
});

defineProjections(Model);

export default Model;
