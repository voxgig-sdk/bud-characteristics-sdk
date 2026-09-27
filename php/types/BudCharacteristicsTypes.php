<?php
declare(strict_types=1);

// Typed models for the BudCharacteristics SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** RetrieveCustomerCharacteristic entity data model. */
class RetrieveCustomerCharacteristic
{
    public ?array $credit_card_transaction_totals = null;
    public ?array $credit_card_transactions = null;
    public ?string $link = null;
    public ?array $loan_transaction_totals = null;
    public ?array $loan_transactions = null;
    public ?array $overdraft_transaction_totals = null;
    public ?array $overdraft_transactions = null;
    public ?array $saver_transaction_totals = null;
    public ?array $saver_transactions = null;
    public ?string $type = null;
}

/** Request payload for RetrieveCustomerCharacteristic#load. */
class RetrieveCustomerCharacteristicLoadMatch
{
    public ?array $credit_card_transaction_totals = null;
    public ?array $credit_card_transactions = null;
    public ?string $link = null;
    public ?array $loan_transaction_totals = null;
    public ?array $loan_transactions = null;
    public ?array $overdraft_transaction_totals = null;
    public ?array $overdraft_transactions = null;
    public ?array $saver_transaction_totals = null;
    public ?array $saver_transactions = null;
    public ?string $type = null;
}

/** Request payload for RetrieveCustomerCharacteristic#list. */
class RetrieveCustomerCharacteristicListMatch
{
    public ?array $credit_card_transaction_totals = null;
    public ?array $credit_card_transactions = null;
    public ?string $link = null;
    public ?array $loan_transaction_totals = null;
    public ?array $loan_transactions = null;
    public ?array $overdraft_transaction_totals = null;
    public ?array $overdraft_transactions = null;
    public ?array $saver_transaction_totals = null;
    public ?array $saver_transactions = null;
    public ?string $type = null;
}

