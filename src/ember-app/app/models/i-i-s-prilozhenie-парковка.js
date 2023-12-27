import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПарковкаMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-парковка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПарковкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
