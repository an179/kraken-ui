import {BLOTTER_UPDATE, BlotterUpdateAction} from './ActionsTypes';
import { TreeStructuredData } from '../../types/CommonTypes';

export const updateData = function <T extends TreeStructuredData>(data: T): BlotterUpdateAction<T> {
    return {
        type: BLOTTER_UPDATE,
        payload: data
    }
}
