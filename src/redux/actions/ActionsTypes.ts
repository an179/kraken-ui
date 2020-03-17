import { TreeStructuredData } from "../../types/CommonTypes";

export const BLOTTER_UPDATE = 'BLOTTER_UPDATE';

export interface BlotterUpdateAction<T extends TreeStructuredData> {
    type: typeof BLOTTER_UPDATE
    payload: T
}