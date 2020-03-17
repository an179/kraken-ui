import {DATA_CHANGE, TickerDataChangeAction} from './ActionsTypes';
import { Ticker } from '../TickerTypes';

export const changeData = function (data: Ticker): TickerDataChangeAction {
    return {
        type: DATA_CHANGE,
        payload: data
    }
}
