import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-терминал', 'Unit | Model | i-i-s-prilozhenie-терминал', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
