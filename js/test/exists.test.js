
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { BudCharacteristicsSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BudCharacteristicsSDK.test()
    equal(null !== testsdk, true)
  })

})
