
export const BLOTTER_UPDATE = 'BLOTTER_UPDATE';
export const BULK_BLOTTER_UPDATE = 'BULK_BLOTTER_UPDATE';

export interface BlotterUpdateAction<T> {
    type: typeof BLOTTER_UPDATE
    payload: T
}

export interface BulkBlotterUpdateAction<ListOfT> {
    type: typeof BULK_BLOTTER_UPDATE
    payload: ListOfT
}

export type KrakenBlotterActions<T> = BlotterUpdateAction<T> | BulkBlotterUpdateAction<T>

export type ListOfT<T> = T[]