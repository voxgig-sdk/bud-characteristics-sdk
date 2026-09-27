package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "BudCharacteristics",
			"slug": "bud-characteristics",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api-sandbox.thisisbud.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"retrieve_customer_characteristic": map[string]any{},
			},
		},
		"entity": map[string]any{
			"retrieve_customer_characteristic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "credit_card_transaction_totals",
						"title": "Credit Card Transaction Totals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "credit_card_transactions",
						"title": "Credit Card Transactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "link",
						"title": "Link",
						"type": "`$STRING`",
						"short": "The URL to follow to get detailed Characteristic information about the customer.",
					},
					map[string]any{
						"name": "loan_transaction_totals",
						"title": "Loan Transaction Totals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "loan_transactions",
						"title": "Loan Transactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "overdraft_transaction_totals",
						"title": "Overdraft Transaction Totals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "overdraft_transactions",
						"title": "Overdraft Transactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "saver_transaction_totals",
						"title": "Saver Transaction Totals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "saver_transactions",
						"title": "Saver Transactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "The type of customer characteristic.",
					},
				},
				"name": "retrieve_customer_characteristic",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characteristics/v1/customer",
								"segments": []any{
									map[string]any{
										"lit": "characteristics",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customer",
									},
								},
								"parts": []any{
									"characteristics",
									"v1",
									"customer",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_client_id",
											"orig": "x_client_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
										},
										map[string]any{
											"name": "x_customer_id",
											"orig": "x_customer_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
										},
										map[string]any{
											"name": "x_customer_idempotent_identifier",
											"orig": "x_customer_idempotent_identifier",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_customer_secret",
											"orig": "x_customer_secret",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_client_id",
										"x_customer_id",
										"x_customer_idempotent_identifier",
										"x_customer_secret",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characteristics/v1/customer/credit-card",
								"segments": []any{
									map[string]any{
										"lit": "characteristics",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customer",
									},
									map[string]any{
										"lit": "credit-card",
									},
								},
								"parts": []any{
									"characteristics",
									"v1",
									"customer",
									"credit-card",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_client_id",
											"orig": "x_client_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
										},
										map[string]any{
											"name": "x_customer_id",
											"orig": "x_customer_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
										},
										map[string]any{
											"name": "x_customer_idempotent_identifier",
											"orig": "x_customer_idempotent_identifier",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_customer_secret",
											"orig": "x_customer_secret",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_client_id",
										"x_customer_id",
										"x_customer_idempotent_identifier",
										"x_customer_secret",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characteristics/v1/customer/loan",
								"segments": []any{
									map[string]any{
										"lit": "characteristics",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customer",
									},
									map[string]any{
										"lit": "loan",
									},
								},
								"parts": []any{
									"characteristics",
									"v1",
									"customer",
									"loan",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_client_id",
											"orig": "x_client_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
										},
										map[string]any{
											"name": "x_customer_id",
											"orig": "x_customer_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
										},
										map[string]any{
											"name": "x_customer_idempotent_identifier",
											"orig": "x_customer_idempotent_identifier",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_customer_secret",
											"orig": "x_customer_secret",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_client_id",
										"x_customer_id",
										"x_customer_idempotent_identifier",
										"x_customer_secret",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characteristics/v1/customer/overdraft",
								"segments": []any{
									map[string]any{
										"lit": "characteristics",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customer",
									},
									map[string]any{
										"lit": "overdraft",
									},
								},
								"parts": []any{
									"characteristics",
									"v1",
									"customer",
									"overdraft",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_client_id",
											"orig": "x_client_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
										},
										map[string]any{
											"name": "x_customer_id",
											"orig": "x_customer_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
										},
										map[string]any{
											"name": "x_customer_idempotent_identifier",
											"orig": "x_customer_idempotent_identifier",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_customer_secret",
											"orig": "x_customer_secret",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_client_id",
										"x_customer_id",
										"x_customer_idempotent_identifier",
										"x_customer_secret",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characteristics/v1/customer/saver",
								"segments": []any{
									map[string]any{
										"lit": "characteristics",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customer",
									},
									map[string]any{
										"lit": "saver",
									},
								},
								"parts": []any{
									"characteristics",
									"v1",
									"customer",
									"saver",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_client_id",
											"orig": "x_client_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
										},
										map[string]any{
											"name": "x_customer_id",
											"orig": "x_customer_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
										},
										map[string]any{
											"name": "x_customer_idempotent_identifier",
											"orig": "x_customer_idempotent_identifier",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_customer_secret",
											"orig": "x_customer_secret",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_client_id",
										"x_customer_id",
										"x_customer_idempotent_identifier",
										"x_customer_secret",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
