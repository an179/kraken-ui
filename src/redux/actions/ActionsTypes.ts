import { Ticker } from "../TickerTypes";

export const DATA_CHANGE = 'DATA_CHANGE';

export interface TickerDataChangeAction {
    type: typeof DATA_CHANGE
    payload: Ticker
}