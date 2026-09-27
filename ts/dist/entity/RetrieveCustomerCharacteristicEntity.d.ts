import { BudCharacteristicsEntityBase } from '../BudCharacteristicsEntityBase';
import type { BudCharacteristicsSDK } from '../BudCharacteristicsSDK';
import type { Control } from '../types';
import type { RetrieveCustomerCharacteristic, RetrieveCustomerCharacteristicLoadMatch, RetrieveCustomerCharacteristicListMatch } from '../BudCharacteristicsTypes';
declare class RetrieveCustomerCharacteristicEntity extends BudCharacteristicsEntityBase<RetrieveCustomerCharacteristic> {
    constructor(client: BudCharacteristicsSDK, entopts: any);
    make(this: RetrieveCustomerCharacteristicEntity): RetrieveCustomerCharacteristicEntity;
    load(this: any, reqmatch?: RetrieveCustomerCharacteristicLoadMatch, ctrl?: Control): Promise<RetrieveCustomerCharacteristicEntity>;
    list(this: any, reqmatch?: RetrieveCustomerCharacteristicListMatch, ctrl?: Control): Promise<RetrieveCustomerCharacteristicEntity[]>;
}
export { RetrieveCustomerCharacteristicEntity };
