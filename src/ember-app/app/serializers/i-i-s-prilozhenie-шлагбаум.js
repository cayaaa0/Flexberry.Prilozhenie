import { Serializer as ШлагбаумSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-шлагбаум';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ШлагбаумSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
