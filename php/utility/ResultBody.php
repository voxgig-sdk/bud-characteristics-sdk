<?php
declare(strict_types=1);

// BudCharacteristics SDK utility: result_body

class BudCharacteristicsResultBody
{
    public static function call(BudCharacteristicsContext $ctx): ?BudCharacteristicsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
