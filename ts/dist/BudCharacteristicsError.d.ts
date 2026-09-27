import { Context } from './Context';
declare class BudCharacteristicsError extends Error {
    isBudCharacteristicsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BudCharacteristicsError };
