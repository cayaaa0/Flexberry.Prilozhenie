import {
  defineNamespace,
  defineProjections,
  Model as ШлагбаумMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-шлагбаум';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ШлагбаумMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
