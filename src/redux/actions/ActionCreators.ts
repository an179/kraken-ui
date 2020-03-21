import {BLOTTER_UPDATE, BlotterUpdateAction, BulkBlotterUpdateAction, BULK_BLOTTER_UPDATE} from './ActionsTypes';
import { TreeStructuredData } from '../../types/CommonTypes';

export const singleDataUpdate = function <T extends TreeStructuredData>(data: T): BlotterUpdateAction<T> {
    return {
        type: BLOTTER_UPDATE,
        payload: data
    }
}

export const bulkDataUpdate = function <ListOfT>(data: ListOfT): BulkBlotterUpdateAction<ListOfT> {
    return {
        type: BULK_BLOTTER_UPDATE,
        payload: data
    }
}

type ListOfT<T> = T[]