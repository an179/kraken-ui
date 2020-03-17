import { CurrencyPair } from "../../types/KrakenCommonDataTypes";

interface KrakenCurrencyPair {
    wsname: CurrencyPair
}
export interface KrakenAssetPairsResult {
    error: string[],
    result: {[altname: string]: KrakenCurrencyPair}
}