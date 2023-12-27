import {
  defineNamespace,
  defineProjections,
  Model as ЗапОбУслMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-зап-об-усл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗапОбУслMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
