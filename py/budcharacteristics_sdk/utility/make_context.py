# BudCharacteristics SDK utility: make_context

from budcharacteristics_sdk.core.context import BudCharacteristicsContext


def make_context_util(ctxmap, basectx):
    return BudCharacteristicsContext(ctxmap, basectx)
