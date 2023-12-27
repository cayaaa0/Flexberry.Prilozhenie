import { Serializer as ЗапОбУслSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-зап-об-усл';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗапОбУслSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
