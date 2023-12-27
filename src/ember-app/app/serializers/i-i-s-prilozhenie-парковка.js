import { Serializer as ПарковкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-парковка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПарковкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
