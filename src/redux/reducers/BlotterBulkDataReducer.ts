import { BulkBlotterUpdateAction, BULK_BLOTTER_UPDATE, ListOfT } from "../actions/ActionsTypes"
import { BlotterData } from '../../types/CommonTypes';

export function bulkDataUpdateReducer <T>(data: BlotterData<T> = [], action: BulkBlotterUpdateAction<ListOfT<T>>): BlotterData<T> {
    if(action.payload && action.type === BULK_BLOTTER_UPDATE) {
        data = data.concat(...action.payload);
    }
    return data;
}