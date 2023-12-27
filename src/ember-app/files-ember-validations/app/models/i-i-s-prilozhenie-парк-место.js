import {
  defineNamespace,
  defineProjections,
  Model as ПаркМестоMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-парк-место';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПаркМестоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
