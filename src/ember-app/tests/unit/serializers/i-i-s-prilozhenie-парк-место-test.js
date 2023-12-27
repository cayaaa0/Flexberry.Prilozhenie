import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-парк-место', 'Unit | Serializer | i-i-s-prilozhenie-парк-место', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-парк-место',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-оплата',
    'transform:i-i-s-prilozhenie-положения',
    'transform:i-i-s-prilozhenie-статусы',
    'transform:i-i-s-prilozhenie-стоимость',
    'transform:i-i-s-prilozhenie-услуги',

    'model:i-i-s-prilozhenie-автомобиль',
    'model:i-i-s-prilozhenie-водитель',
    'model:i-i-s-prilozhenie-зап-об-усл',
    'model:i-i-s-prilozhenie-парк-место',
    'model:i-i-s-prilozhenie-парковка',
    'model:i-i-s-prilozhenie-паркомат',
    'model:i-i-s-prilozhenie-терминал',
    'model:i-i-s-prilozhenie-услуга',
    'model:i-i-s-prilozhenie-шлагбаум',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
