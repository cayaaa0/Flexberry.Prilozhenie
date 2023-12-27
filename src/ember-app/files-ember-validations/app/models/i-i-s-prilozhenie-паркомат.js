import {
  defineNamespace,
  defineProjections,
  Model as ПаркоматMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-паркомат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПаркоматMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
