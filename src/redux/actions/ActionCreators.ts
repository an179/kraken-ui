import {DATA_CHANGE, TickerDataChangeAction} from './ActionsTypes';
import { Ticker } from '../TickerTypes';

export const changeData = function <T> (data: Ticker): TickerDataChangeAction {
    return {
        type: DATA_CHANGE,
        payload: data
    }
}
