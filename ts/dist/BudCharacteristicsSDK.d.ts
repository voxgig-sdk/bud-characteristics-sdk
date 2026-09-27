import { RetrieveCustomerCharacteristicEntity } from './entity/RetrieveCustomerCharacteristicEntity';
export type * from './BudCharacteristicsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BudCharacteristicsEntityBase } from './BudCharacteristicsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class BudCharacteristicsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    RetrieveCustomerCharacteristic(entopts?: Record<string, any>): RetrieveCustomerCharacteristicEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BudCharacteristicsSDK;
    tester(testopts?: any, sdkopts?: any): BudCharacteristicsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BudCharacteristicsSDK;
export { stdutil, config, BaseFeature, BudCharacteristicsEntityBase, BudCharacteristicsSDK, SDK, };
