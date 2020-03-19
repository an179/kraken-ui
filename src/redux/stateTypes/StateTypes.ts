import {BlotterData} from '../../types/CommonTypes'
import {TransformedTickerDetails} from '../../types/KrakenTickerTypes'
import { TransformedOhlcDetails } from '../../types/KrakenOhlcTypes'

export interface KrakenBlotterRootState {
    tickerData: BlotterData<TransformedTickerDetails>
    ohlcData: BlotterData<TransformedOhlcDetails>
}