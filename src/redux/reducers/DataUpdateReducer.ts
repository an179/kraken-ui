import { TickerDataChangeAction } from "../actions/ActionsTypes"
import { TickerDataState } from '../state/StateTypes';
import {Ticker} from '../TickerTypes';

export function tickerReducer (data: TickerDataState = [], action: TickerDataChangeAction): TickerDataState {
    
    if(data.length > 0) {
        const indexOfPayload: number = indexOf(action.payload, data)
        if(indexOfPayload < 0){
            data.push(action.payload)
        } else {
            Object.assign(data[indexOfPayload], action.payload)
        }
    }
    return data;
}

function indexOf (itemToFind: Ticker, data: TickerDataState): number {

    return data.findIndex(item => item[3] === itemToFind[3]);
}