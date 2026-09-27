# BudCharacteristics SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BudCharacteristics",
            "slug": "bud-characteristics",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api-sandbox.thisisbud.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "retrieve_customer_characteristic": {},
            },
        },
        "entity": {
      "retrieve_customer_characteristic": {
        "fields": [
          {
            "name": "credit_card_transaction_totals",
            "title": "Credit Card Transaction Totals",
            "type": "`$ARRAY`",
          },
          {
            "name": "credit_card_transactions",
            "title": "Credit Card Transactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "link",
            "title": "Link",
            "type": "`$STRING`",
            "short": "The URL to follow to get detailed Characteristic information about the customer.",
          },
          {
            "name": "loan_transaction_totals",
            "title": "Loan Transaction Totals",
            "type": "`$ARRAY`",
          },
          {
            "name": "loan_transactions",
            "title": "Loan Transactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "overdraft_transaction_totals",
            "title": "Overdraft Transaction Totals",
            "type": "`$ARRAY`",
          },
          {
            "name": "overdraft_transactions",
            "title": "Overdraft Transactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "saver_transaction_totals",
            "title": "Saver Transaction Totals",
            "type": "`$ARRAY`",
          },
          {
            "name": "saver_transactions",
            "title": "Saver Transactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "The type of customer characteristic.",
          },
        ],
        "name": "retrieve_customer_characteristic",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characteristics/v1/customer",
                "segments": [
                  {
                    "lit": "characteristics",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "customer",
                  },
                ],
                "parts": [
                  "characteristics",
                  "v1",
                  "customer",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_client_id",
                      "orig": "x_client_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
                    },
                    {
                      "name": "x_customer_id",
                      "orig": "x_customer_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
                    },
                    {
                      "name": "x_customer_idempotent_identifier",
                      "orig": "x_customer_idempotent_identifier",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_customer_secret",
                      "orig": "x_customer_secret",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_client_id",
                    "x_customer_id",
                    "x_customer_idempotent_identifier",
                    "x_customer_secret",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characteristics/v1/customer/credit-card",
                "segments": [
                  {
                    "lit": "characteristics",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "customer",
                  },
                  {
                    "lit": "credit-card",
                  },
                ],
                "parts": [
                  "characteristics",
                  "v1",
                  "customer",
                  "credit-card",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_client_id",
                      "orig": "x_client_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
                    },
                    {
                      "name": "x_customer_id",
                      "orig": "x_customer_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
                    },
                    {
                      "name": "x_customer_idempotent_identifier",
                      "orig": "x_customer_idempotent_identifier",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_customer_secret",
                      "orig": "x_customer_secret",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_client_id",
                    "x_customer_id",
                    "x_customer_idempotent_identifier",
                    "x_customer_secret",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characteristics/v1/customer/loan",
                "segments": [
                  {
                    "lit": "characteristics",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "customer",
                  },
                  {
                    "lit": "loan",
                  },
                ],
                "parts": [
                  "characteristics",
                  "v1",
                  "customer",
                  "loan",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_client_id",
                      "orig": "x_client_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
                    },
                    {
                      "name": "x_customer_id",
                      "orig": "x_customer_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
                    },
                    {
                      "name": "x_customer_idempotent_identifier",
                      "orig": "x_customer_idempotent_identifier",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_customer_secret",
                      "orig": "x_customer_secret",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_client_id",
                    "x_customer_id",
                    "x_customer_idempotent_identifier",
                    "x_customer_secret",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characteristics/v1/customer/overdraft",
                "segments": [
                  {
                    "lit": "characteristics",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "customer",
                  },
                  {
                    "lit": "overdraft",
                  },
                ],
                "parts": [
                  "characteristics",
                  "v1",
                  "customer",
                  "overdraft",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_client_id",
                      "orig": "x_client_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
                    },
                    {
                      "name": "x_customer_id",
                      "orig": "x_customer_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
                    },
                    {
                      "name": "x_customer_idempotent_identifier",
                      "orig": "x_customer_idempotent_identifier",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_customer_secret",
                      "orig": "x_customer_secret",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_client_id",
                    "x_customer_id",
                    "x_customer_idempotent_identifier",
                    "x_customer_secret",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characteristics/v1/customer/saver",
                "segments": [
                  {
                    "lit": "characteristics",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "customer",
                  },
                  {
                    "lit": "saver",
                  },
                ],
                "parts": [
                  "characteristics",
                  "v1",
                  "customer",
                  "saver",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_client_id",
                      "orig": "x_client_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a",
                    },
                    {
                      "name": "x_customer_id",
                      "orig": "x_customer_id",
                      "type": "`$STRING`",
                      "kind": "header",
                      "reqd": True,
                      "example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23",
                    },
                    {
                      "name": "x_customer_idempotent_identifier",
                      "orig": "x_customer_idempotent_identifier",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_customer_secret",
                      "orig": "x_customer_secret",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "x_client_id",
                    "x_customer_id",
                    "x_customer_idempotent_identifier",
                    "x_customer_secret",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
