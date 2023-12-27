import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПаркМестоMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-парк-место';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПаркМестоMixin, Validations, {
});

defineProjections(Model);

export default Model;
