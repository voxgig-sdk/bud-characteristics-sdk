

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BudCharacteristicsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RetrieveCustomerCharacteristicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BUD_CHARACTERISTICS_TEST_LIVE=TRUE.
  afterEach(liveDelay('BUD_CHARACTERISTICS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BudCharacteristicsSDK.test()
    const ent = testsdk.RetrieveCustomerCharacteristic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BUD_CHARACTERISTICS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'retrieve_customer_characteristic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"credit_card_transaction_totals":{"a":true,"h":"Credit Card Transaction Totals","n":"credit_card_transaction_totals","r":false,"t":"`$ARRAY`","key$":"credit_card_transaction_totals","index$":0},"credit_card_transactions":{"a":true,"h":"Credit Card Transactions","n":"credit_card_transactions","r":false,"t":"`$ARRAY`","key$":"credit_card_transactions","index$":1},"link":{"a":true,"h":"Link","n":"link","r":false,"sh":"The URL to follow to get detailed Characteristic information about the customer.","t":"`$STRING`","key$":"link","index$":2},"loan_transaction_totals":{"a":true,"h":"Loan Transaction Totals","n":"loan_transaction_totals","r":false,"t":"`$ARRAY`","key$":"loan_transaction_totals","index$":3},"loan_transactions":{"a":true,"h":"Loan Transactions","n":"loan_transactions","r":false,"t":"`$ARRAY`","key$":"loan_transactions","index$":4},"overdraft_transaction_totals":{"a":true,"h":"Overdraft Transaction Totals","n":"overdraft_transaction_totals","r":false,"t":"`$ARRAY`","key$":"overdraft_transaction_totals","index$":5},"overdraft_transactions":{"a":true,"h":"Overdraft Transactions","n":"overdraft_transactions","r":false,"t":"`$ARRAY`","key$":"overdraft_transactions","index$":6},"saver_transaction_totals":{"a":true,"h":"Saver Transaction Totals","n":"saver_transaction_totals","r":false,"t":"`$ARRAY`","key$":"saver_transaction_totals","index$":7},"saver_transactions":{"a":true,"h":"Saver Transactions","n":"saver_transactions","r":false,"t":"`$ARRAY`","key$":"saver_transactions","index$":8},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of customer characteristic.","t":"`$STRING`","key$":"type","index$":9}},"name":"retrieve_customer_characteristic","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /characteristics/v1/customer","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","k":"header","n":"x_client_id","or":"x_client_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","k":"header","n":"x_customer_id","or":"x_customer_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_customer_idempotent_identifier","or":"x_customer_idempotent_identifier","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"header","n":"x_customer_secret","or":"x_customer_secret","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/characteristics/v1/customer","q":{"exist":["x_client_id","x_customer_id","x_customer_idempotent_identifier","x_customer_secret"]},"r":{},"s":[{"lit":"characteristics"},{"lit":"v1"},{"lit":"customer"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /characteristics/v1/customer/credit-card","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","k":"header","n":"x_client_id","or":"x_client_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","k":"header","n":"x_customer_id","or":"x_customer_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_customer_idempotent_identifier","or":"x_customer_idempotent_identifier","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"header","n":"x_customer_secret","or":"x_customer_secret","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/characteristics/v1/customer/credit-card","q":{"exist":["x_client_id","x_customer_id","x_customer_idempotent_identifier","x_customer_secret"]},"r":{},"s":[{"lit":"characteristics"},{"lit":"v1"},{"lit":"customer"},{"lit":"credit-card"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /characteristics/v1/customer/loan","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","k":"header","n":"x_client_id","or":"x_client_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","k":"header","n":"x_customer_id","or":"x_customer_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_customer_idempotent_identifier","or":"x_customer_idempotent_identifier","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"header","n":"x_customer_secret","or":"x_customer_secret","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/characteristics/v1/customer/loan","q":{"exist":["x_client_id","x_customer_id","x_customer_idempotent_identifier","x_customer_secret"]},"r":{},"s":[{"lit":"characteristics"},{"lit":"v1"},{"lit":"customer"},{"lit":"loan"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"a":true,"co":{"id":"GET /characteristics/v1/customer/overdraft","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","k":"header","n":"x_client_id","or":"x_client_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","k":"header","n":"x_customer_id","or":"x_customer_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_customer_idempotent_identifier","or":"x_customer_idempotent_identifier","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"header","n":"x_customer_secret","or":"x_customer_secret","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/characteristics/v1/customer/overdraft","q":{"exist":["x_client_id","x_customer_id","x_customer_idempotent_identifier","x_customer_secret"]},"r":{},"s":[{"lit":"characteristics"},{"lit":"v1"},{"lit":"customer"},{"lit":"overdraft"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /characteristics/v1/customer/saver","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","k":"header","n":"x_client_id","or":"x_client_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","k":"header","n":"x_customer_id","or":"x_customer_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_customer_idempotent_identifier","or":"x_customer_idempotent_identifier","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"header","n":"x_customer_secret","or":"x_customer_secret","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/characteristics/v1/customer/saver","q":{"exist":["x_client_id","x_customer_id","x_customer_idempotent_identifier","x_customer_secret"]},"r":{},"s":[{"lit":"characteristics"},{"lit":"v1"},{"lit":"customer"},{"lit":"saver"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"retrieve_customer_characteristic","name__orig":"retrieve_customer_characteristic","Name":"RetrieveCustomerCharacteristic","name_":"retrieve_customer_characteristic","name-":"retrieve-customer-characteristic","NAME":"RETRIEVE_CUSTOMER_CHARACTERISTIC","index$":0}, {"active":true,"entity":"retrieve_customer_characteristic","key$":"BasicRetrieveCustomerCharacteristicFlow","kind":"basic","name":"BasicRetrieveCustomerCharacteristicFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"retrieve_customer_characteristic_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"retrieve_customer_characteristic_ref01","srcdatavar":"retrieve_customer_characteristic_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-retrieve_customer_characteristic_ref01"}}],"index$":1}]}, 'RetrieveCustomerCharacteristic', {"GET /characteristics/v1/customer":{"protocol":"http","parameters":[{"in":"header","name":"X-Client-Id","schema":{"type":"string"},"required":true,"description":"The API Client Identifier (Service Application Identifier).","example":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","index$":0},{"in":"header","name":"X-Customer-Id","schema":{"type":"string","format":"uuid"},"required":true,"description":"A unique identifier for a Customer, as registered on Bud's platform.","example":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","index$":1},{"in":"header","name":"X-Customer-Idempotent-Identifier","schema":{"type":"string"},"description":"Use the internal client identifier, provided in the `client_metadata` object when creating the customer in __Create Customer V3__, in place of an `X-Customer-Id` header.\n","index$":2},{"in":"header","name":"X-Customer-Secret","schema":{"type":"string"},"required":false,"description":"The Bud Customer secret used to encrypt customer data. This is required only if the customer secret is not already stored with Bud.","index$":3}]},"GET /characteristics/v1/customer/credit-card":{"protocol":"http","parameters":[{"in":"header","name":"X-Client-Id","schema":{"type":"string"},"required":true,"description":"The API Client Identifier (Service Application Identifier).","example":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/0","index$":0},{"in":"header","name":"X-Customer-Id","schema":{"type":"string","format":"uuid"},"required":true,"description":"A unique identifier for a Customer, as registered on Bud's platform.","example":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/1","index$":1},{"in":"header","name":"X-Customer-Idempotent-Identifier","schema":{"type":"string"},"description":"Use the internal client identifier, provided in the `client_metadata` object when creating the customer in __Create Customer V3__, in place of an `X-Customer-Id` header.\n","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/2","index$":2},{"in":"header","name":"X-Customer-Secret","schema":{"type":"string"},"required":false,"description":"The Bud Customer secret used to encrypt customer data. This is required only if the customer secret is not already stored with Bud.","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/3","index$":3}]},"GET /characteristics/v1/customer/loan":{"protocol":"http","parameters":[{"in":"header","name":"X-Client-Id","schema":{"type":"string"},"required":true,"description":"The API Client Identifier (Service Application Identifier).","example":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/0","index$":0},{"in":"header","name":"X-Customer-Id","schema":{"type":"string","format":"uuid"},"required":true,"description":"A unique identifier for a Customer, as registered on Bud's platform.","example":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/1","index$":1},{"in":"header","name":"X-Customer-Idempotent-Identifier","schema":{"type":"string"},"description":"Use the internal client identifier, provided in the `client_metadata` object when creating the customer in __Create Customer V3__, in place of an `X-Customer-Id` header.\n","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/2","index$":2},{"in":"header","name":"X-Customer-Secret","schema":{"type":"string"},"required":false,"description":"The Bud Customer secret used to encrypt customer data. This is required only if the customer secret is not already stored with Bud.","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/3","index$":3}]},"GET /characteristics/v1/customer/overdraft":{"protocol":"http","parameters":[{"in":"header","name":"X-Client-Id","schema":{"type":"string"},"required":true,"description":"The API Client Identifier (Service Application Identifier).","example":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/0","index$":0},{"in":"header","name":"X-Customer-Id","schema":{"type":"string","format":"uuid"},"required":true,"description":"A unique identifier for a Customer, as registered on Bud's platform.","example":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/1","index$":1},{"in":"header","name":"X-Customer-Idempotent-Identifier","schema":{"type":"string"},"description":"Use the internal client identifier, provided in the `client_metadata` object when creating the customer in __Create Customer V3__, in place of an `X-Customer-Id` header.\n","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/2","index$":2},{"in":"header","name":"X-Customer-Secret","schema":{"type":"string"},"required":false,"description":"The Bud Customer secret used to encrypt customer data. This is required only if the customer secret is not already stored with Bud.","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/3","index$":3}]},"GET /characteristics/v1/customer/saver":{"protocol":"http","parameters":[{"in":"header","name":"X-Client-Id","schema":{"type":"string"},"required":true,"description":"The API Client Identifier (Service Application Identifier).","example":"8711bbef-b357-4c2d-97ca-0d9df4206e9a","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/0","index$":0},{"in":"header","name":"X-Customer-Id","schema":{"type":"string","format":"uuid"},"required":true,"description":"A unique identifier for a Customer, as registered on Bud's platform.","example":"c3339af9-2426-44d4-9c4d-ddb8fd281e23","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/1","index$":1},{"in":"header","name":"X-Customer-Idempotent-Identifier","schema":{"type":"string"},"description":"Use the internal client identifier, provided in the `client_metadata` object when creating the customer in __Create Customer V3__, in place of an `X-Customer-Id` header.\n","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/2","index$":2},{"in":"header","name":"X-Customer-Secret","schema":{"type":"string"},"required":false,"description":"The Bud Customer secret used to encrypt customer data. This is required only if the customer secret is not already stored with Bud.","x-ref":"#/paths/~1characteristics~1v1~1customer/get/parameters/3","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let retrieve_customer_characteristic_ref01_data = Object.values(setup.data.existing.retrieve_customer_characteristic)[0] as any

    // LIST
    const retrieve_customer_characteristic_ref01_ent = client.RetrieveCustomerCharacteristic()
    const retrieve_customer_characteristic_ref01_match: any = {}

    const retrieve_customer_characteristic_ref01_list = (await retrieve_customer_characteristic_ref01_ent.list(retrieve_customer_characteristic_ref01_match)).map((e: any) => e.data())


    // LOAD
    const retrieve_customer_characteristic_ref01_match_dt0: any = {}
    const retrieve_customer_characteristic_ref01_data_dt0 = (await retrieve_customer_characteristic_ref01_ent.load(retrieve_customer_characteristic_ref01_match_dt0)).data()
    assert(null != retrieve_customer_characteristic_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/retrieve_customer_characteristic/RetrieveCustomerCharacteristicTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BudCharacteristicsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['retrieve_customer_characteristic01','retrieve_customer_characteristic02','retrieve_customer_characteristic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID': idmap,
    'BUD_CHARACTERISTICS_TEST_LIVE': 'FALSE',
    'BUD_CHARACTERISTICS_TEST_EXPLAIN': 'FALSE',
    'BUD_CHARACTERISTICS_APIKEY': '',
  })

  idmap = env['BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID']

  const live = 'TRUE' === env.BUD_CHARACTERISTICS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BudCharacteristicsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.BUD_CHARACTERISTICS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BUD_CHARACTERISTICS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
