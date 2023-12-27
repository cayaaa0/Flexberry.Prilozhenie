import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТерминалMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-терминал';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТерминалMixin, Validations, {
});

defineProjections(Model);

export default Model;
