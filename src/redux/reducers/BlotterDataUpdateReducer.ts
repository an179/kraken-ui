import { BlotterUpdateAction } from "../actions/ActionsTypes"
import { BlotterData, TreeStructuredData } from '../../types/CommonTypes';

export function krakenBlotterReducer <T extends TreeStructuredData>(data: BlotterData<T> = [], action: BlotterUpdateAction<T>): BlotterData<T> {
    const indexOfPayload: number = indexOf(action.payload, data)
    if(action.payload) {
        if(indexOfPayload < 0){
            return [...data, action.payload]
        } else {
            const newData = [...data]
            newData[indexOfPayload] = action.payload
            return newData;
        }
    }
    return data;
}

function indexOf<T extends TreeStructuredData>(itemToFind: T, data: BlotterData<T>): number {
    return data.findIndex(item => item.currencyPair === itemToFind.currencyPair);
}