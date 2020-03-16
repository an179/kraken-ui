import { CurrencyPair } from "./KrakenDataTypes";

interface KrakenCurrencyPair {
    wsname: CurrencyPair
}
export interface KrakenAssetPairsResult {
    error: string[],
    result: {[altname: string]: KrakenCurrencyPair}
}