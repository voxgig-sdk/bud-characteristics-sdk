<?php
declare(strict_types=1);

// BudCharacteristics SDK configuration

class BudCharacteristicsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "BudCharacteristics",
                "slug" => "bud-characteristics",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api-sandbox.thisisbud.com",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "retrieve_customer_characteristic" => [],
                ],
            ],
            "entity" => [
        'retrieve_customer_characteristic' => [
          'fields' => [
            [
              'name' => 'credit_card_transaction_totals',
              'title' => 'Credit Card Transaction Totals',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'credit_card_transactions',
              'title' => 'Credit Card Transactions',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'link',
              'title' => 'Link',
              'type' => '`$STRING`',
              'short' => 'The URL to follow to get detailed Characteristic information about the customer.',
            ],
            [
              'name' => 'loan_transaction_totals',
              'title' => 'Loan Transaction Totals',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'loan_transactions',
              'title' => 'Loan Transactions',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'overdraft_transaction_totals',
              'title' => 'Overdraft Transaction Totals',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'overdraft_transactions',
              'title' => 'Overdraft Transactions',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'saver_transaction_totals',
              'title' => 'Saver Transaction Totals',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'saver_transactions',
              'title' => 'Saver Transactions',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'The type of customer characteristic.',
            ],
          ],
          'name' => 'retrieve_customer_characteristic',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characteristics/v1/customer',
                  'segments' => [
                    [
                      'lit' => 'characteristics',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'customer',
                    ],
                  ],
                  'parts' => [
                    'characteristics',
                    'v1',
                    'customer',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'x_client_id',
                        'orig' => 'x_client_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '8711bbef-b357-4c2d-97ca-0d9df4206e9a',
                      ],
                      [
                        'name' => 'x_customer_id',
                        'orig' => 'x_customer_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => 'c3339af9-2426-44d4-9c4d-ddb8fd281e23',
                      ],
                      [
                        'name' => 'x_customer_idempotent_identifier',
                        'orig' => 'x_customer_idempotent_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                      [
                        'name' => 'x_customer_secret',
                        'orig' => 'x_customer_secret',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_client_id',
                      'x_customer_id',
                      'x_customer_idempotent_identifier',
                      'x_customer_secret',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characteristics/v1/customer/credit-card',
                  'segments' => [
                    [
                      'lit' => 'characteristics',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'customer',
                    ],
                    [
                      'lit' => 'credit-card',
                    ],
                  ],
                  'parts' => [
                    'characteristics',
                    'v1',
                    'customer',
                    'credit-card',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'x_client_id',
                        'orig' => 'x_client_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '8711bbef-b357-4c2d-97ca-0d9df4206e9a',
                      ],
                      [
                        'name' => 'x_customer_id',
                        'orig' => 'x_customer_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => 'c3339af9-2426-44d4-9c4d-ddb8fd281e23',
                      ],
                      [
                        'name' => 'x_customer_idempotent_identifier',
                        'orig' => 'x_customer_idempotent_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                      [
                        'name' => 'x_customer_secret',
                        'orig' => 'x_customer_secret',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_client_id',
                      'x_customer_id',
                      'x_customer_idempotent_identifier',
                      'x_customer_secret',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characteristics/v1/customer/loan',
                  'segments' => [
                    [
                      'lit' => 'characteristics',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'customer',
                    ],
                    [
                      'lit' => 'loan',
                    ],
                  ],
                  'parts' => [
                    'characteristics',
                    'v1',
                    'customer',
                    'loan',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'x_client_id',
                        'orig' => 'x_client_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '8711bbef-b357-4c2d-97ca-0d9df4206e9a',
                      ],
                      [
                        'name' => 'x_customer_id',
                        'orig' => 'x_customer_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => 'c3339af9-2426-44d4-9c4d-ddb8fd281e23',
                      ],
                      [
                        'name' => 'x_customer_idempotent_identifier',
                        'orig' => 'x_customer_idempotent_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                      [
                        'name' => 'x_customer_secret',
                        'orig' => 'x_customer_secret',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_client_id',
                      'x_customer_id',
                      'x_customer_idempotent_identifier',
                      'x_customer_secret',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characteristics/v1/customer/overdraft',
                  'segments' => [
                    [
                      'lit' => 'characteristics',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'customer',
                    ],
                    [
                      'lit' => 'overdraft',
                    ],
                  ],
                  'parts' => [
                    'characteristics',
                    'v1',
                    'customer',
                    'overdraft',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'x_client_id',
                        'orig' => 'x_client_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '8711bbef-b357-4c2d-97ca-0d9df4206e9a',
                      ],
                      [
                        'name' => 'x_customer_id',
                        'orig' => 'x_customer_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => 'c3339af9-2426-44d4-9c4d-ddb8fd281e23',
                      ],
                      [
                        'name' => 'x_customer_idempotent_identifier',
                        'orig' => 'x_customer_idempotent_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                      [
                        'name' => 'x_customer_secret',
                        'orig' => 'x_customer_secret',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_client_id',
                      'x_customer_id',
                      'x_customer_idempotent_identifier',
                      'x_customer_secret',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characteristics/v1/customer/saver',
                  'segments' => [
                    [
                      'lit' => 'characteristics',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'customer',
                    ],
                    [
                      'lit' => 'saver',
                    ],
                  ],
                  'parts' => [
                    'characteristics',
                    'v1',
                    'customer',
                    'saver',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'x_client_id',
                        'orig' => 'x_client_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '8711bbef-b357-4c2d-97ca-0d9df4206e9a',
                      ],
                      [
                        'name' => 'x_customer_id',
                        'orig' => 'x_customer_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => 'c3339af9-2426-44d4-9c4d-ddb8fd281e23',
                      ],
                      [
                        'name' => 'x_customer_idempotent_identifier',
                        'orig' => 'x_customer_idempotent_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                      [
                        'name' => 'x_customer_secret',
                        'orig' => 'x_customer_secret',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_client_id',
                      'x_customer_id',
                      'x_customer_idempotent_identifier',
                      'x_customer_secret',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BudCharacteristicsFeatures::make_feature($name);
    }
}
