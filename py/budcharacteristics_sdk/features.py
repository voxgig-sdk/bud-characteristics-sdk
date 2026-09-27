# BudCharacteristics SDK feature factory

from budcharacteristics_sdk.feature.base_feature import BudCharacteristicsBaseFeature
from budcharacteristics_sdk.feature.debug_feature import BudCharacteristicsDebugFeature
from budcharacteristics_sdk.feature.idempotency_feature import BudCharacteristicsIdempotencyFeature
from budcharacteristics_sdk.feature.metrics_feature import BudCharacteristicsMetricsFeature
from budcharacteristics_sdk.feature.paging_feature import BudCharacteristicsPagingFeature
from budcharacteristics_sdk.feature.ratelimit_feature import BudCharacteristicsRatelimitFeature
from budcharacteristics_sdk.feature.retry_feature import BudCharacteristicsRetryFeature
from budcharacteristics_sdk.feature.test_feature import BudCharacteristicsTestFeature
from budcharacteristics_sdk.feature.timeout_feature import BudCharacteristicsTimeoutFeature


_FEATURES = {
    "base": lambda: BudCharacteristicsBaseFeature(),
    "debug": lambda: BudCharacteristicsDebugFeature(),
    "idempotency": lambda: BudCharacteristicsIdempotencyFeature(),
    "metrics": lambda: BudCharacteristicsMetricsFeature(),
    "paging": lambda: BudCharacteristicsPagingFeature(),
    "ratelimit": lambda: BudCharacteristicsRatelimitFeature(),
    "retry": lambda: BudCharacteristicsRetryFeature(),
    "test": lambda: BudCharacteristicsTestFeature(),
    "timeout": lambda: BudCharacteristicsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
