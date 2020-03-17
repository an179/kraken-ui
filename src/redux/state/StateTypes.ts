import { Ticker, TickerDetailsForAgGrid } from "../TickerTypes"

export type TickerDataState = TickerDetailsForAgGrid[]

export interface KrakenBlotterState {
    tickerData: TickerDataState
}