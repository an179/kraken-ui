import { TickerDataChangeAction } from "../actions/ActionsTypes"
import { TickerDataState } from '../state/StateTypes';
import { TickerDetailsForAgGrid, transformTickerData} from '../TickerTypes';

export function tickerReducer (data: TickerDataState = [], action: TickerDataChangeAction): TickerDataState {
    let transformedTickerData: TickerDetailsForAgGrid;
    try{
        transformedTickerData = transformTickerData(action.payload);
           
        const indexOfPayload: number = indexOf(transformedTickerData, data)
        if(indexOfPayload < 0){
            return [...data, transformedTickerData]
        } else {
            const newData = [...data]
            newData[indexOfPayload] = transformedTickerData
            return newData;
        }
    } catch (e) {
        console.error("Unable to parse "+ JSON.stringify(action.payload))
    }
    return data;
}

function indexOf (itemToFind: TickerDetailsForAgGrid, data: TickerDataState): number {
    return data.findIndex(item => item.currencyPair === itemToFind.currencyPair);
}