<?php
declare(strict_types=1);

// BudCharacteristics SDK utility: result_headers

class BudCharacteristicsResultHeaders
{
    public static function call(BudCharacteristicsContext $ctx): ?BudCharacteristicsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
