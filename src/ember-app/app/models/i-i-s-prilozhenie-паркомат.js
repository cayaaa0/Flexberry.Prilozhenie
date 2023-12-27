import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПаркоматMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-паркомат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПаркоматMixin, Validations, {
});

defineProjections(Model);

export default Model;
