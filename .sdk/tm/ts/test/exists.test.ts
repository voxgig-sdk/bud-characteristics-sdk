
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BudCharacteristicsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BudCharacteristicsSDK.test()
    equal(testsdk instanceof BudCharacteristicsSDK, true,
      'BudCharacteristicsSDK.test() must return a client synchronously')
  })

})
