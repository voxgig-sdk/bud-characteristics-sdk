<?php
declare(strict_types=1);

// BudCharacteristics SDK base feature

class BudCharacteristicsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BudCharacteristicsContext $ctx, array $options): void {}
    public function PostConstruct(BudCharacteristicsContext $ctx): void {}
    public function PostConstructEntity(BudCharacteristicsContext $ctx): void {}
    public function SetData(BudCharacteristicsContext $ctx): void {}
    public function GetData(BudCharacteristicsContext $ctx): void {}
    public function GetMatch(BudCharacteristicsContext $ctx): void {}
    public function SetMatch(BudCharacteristicsContext $ctx): void {}
    public function PrePoint(BudCharacteristicsContext $ctx): void {}
    public function PreSpec(BudCharacteristicsContext $ctx): void {}
    public function PreRequest(BudCharacteristicsContext $ctx): void {}
    public function PreResponse(BudCharacteristicsContext $ctx): void {}
    public function PreResult(BudCharacteristicsContext $ctx): void {}
    public function PreDone(BudCharacteristicsContext $ctx): void {}
    public function PreUnexpected(BudCharacteristicsContext $ctx): void {}
}
