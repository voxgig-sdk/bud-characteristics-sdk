<?php
declare(strict_types=1);

// BudCharacteristics SDK exists test

require_once __DIR__ . '/../budcharacteristics_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BudCharacteristicsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
