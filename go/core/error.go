package core

type BudCharacteristicsError struct {
	IsBudCharacteristicsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBudCharacteristicsError(code string, msg string, ctx *Context) *BudCharacteristicsError {
	return &BudCharacteristicsError{
		IsBudCharacteristicsError: true,
		Sdk:              "BudCharacteristics",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BudCharacteristicsError) Error() string {
	return e.Msg
}
