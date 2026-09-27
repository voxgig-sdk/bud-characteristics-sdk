-- Typed models for the BudCharacteristics SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class RetrieveCustomerCharacteristic
---@field credit_card_transaction_totals? table
---@field credit_card_transactions? table
---@field link? string
---@field loan_transaction_totals? table
---@field loan_transactions? table
---@field overdraft_transaction_totals? table
---@field overdraft_transactions? table
---@field saver_transaction_totals? table
---@field saver_transactions? table
---@field type? string

---@class RetrieveCustomerCharacteristicLoadMatch
---@field credit_card_transaction_totals? table
---@field credit_card_transactions? table
---@field link? string
---@field loan_transaction_totals? table
---@field loan_transactions? table
---@field overdraft_transaction_totals? table
---@field overdraft_transactions? table
---@field saver_transaction_totals? table
---@field saver_transactions? table
---@field type? string

---@class RetrieveCustomerCharacteristicListMatch
---@field credit_card_transaction_totals? table
---@field credit_card_transactions? table
---@field link? string
---@field loan_transaction_totals? table
---@field loan_transactions? table
---@field overdraft_transaction_totals? table
---@field overdraft_transactions? table
---@field saver_transaction_totals? table
---@field saver_transactions? table
---@field type? string

local M = {}

return M
