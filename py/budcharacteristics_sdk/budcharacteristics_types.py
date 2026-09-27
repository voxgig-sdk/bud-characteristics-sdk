# Typed models for the BudCharacteristics SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class RetrieveCustomerCharacteristic(TypedDict, total=False):
    credit_card_transaction_totals: list
    credit_card_transactions: list
    link: str
    loan_transaction_totals: list
    loan_transactions: list
    overdraft_transaction_totals: list
    overdraft_transactions: list
    saver_transaction_totals: list
    saver_transactions: list
    type: str


class RetrieveCustomerCharacteristicLoadMatch(TypedDict, total=False):
    credit_card_transaction_totals: list
    credit_card_transactions: list
    link: str
    loan_transaction_totals: list
    loan_transactions: list
    overdraft_transaction_totals: list
    overdraft_transactions: list
    saver_transaction_totals: list
    saver_transactions: list
    type: str


class RetrieveCustomerCharacteristicListMatch(TypedDict, total=False):
    credit_card_transaction_totals: list
    credit_card_transactions: list
    link: str
    loan_transaction_totals: list
    loan_transactions: list
    overdraft_transaction_totals: list
    overdraft_transactions: list
    saver_transaction_totals: list
    saver_transactions: list
    type: str
