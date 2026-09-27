<?php
declare(strict_types=1);

// BudCharacteristics SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BudCharacteristicsMakeContext
{
    public static function call(array $ctxmap, ?BudCharacteristicsContext $basectx): BudCharacteristicsContext
    {
        return new BudCharacteristicsContext($ctxmap, $basectx);
    }
}
