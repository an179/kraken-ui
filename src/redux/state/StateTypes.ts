import { Ticker } from "../TickerTypes"

export type TickerDataState = Ticker[]

export interface KrakenBlotterState {
    tickerData: TickerDataState
}