import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗапОбУслMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-зап-об-усл';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗапОбУслMixin, Validations, {
});

defineProjections(Model);

export default Model;
