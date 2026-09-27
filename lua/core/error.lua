-- BudCharacteristics SDK error

local BudCharacteristicsError = {}
BudCharacteristicsError.__index = BudCharacteristicsError


function BudCharacteristicsError.new(code, msg, ctx)
  local self = setmetatable({}, BudCharacteristicsError)
  self.is_sdk_error = true
  self.sdk = "BudCharacteristics"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BudCharacteristicsError:error()
  return self.msg
end


function BudCharacteristicsError:__tostring()
  return self.msg
end


return BudCharacteristicsError
