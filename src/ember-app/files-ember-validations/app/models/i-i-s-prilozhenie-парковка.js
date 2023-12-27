import {
  defineNamespace,
  defineProjections,
  Model as ПарковкаMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-парковка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПарковкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
