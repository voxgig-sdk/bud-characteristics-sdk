# BudCharacteristics SDK exists test

import pytest
from budcharacteristics_sdk import BudCharacteristicsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BudCharacteristicsSDK.test(None, None)
        assert testsdk is not None
