import {BlotterData} from '../../types/CommonTypes'
import {TransformedTickerDetails} from '../../types/KrakenTickerTypes'
import { TransformedOhlcDetails } from '../../types/KrakenOhlcTypes'
import { TransformedTradeDetails } from '../../types/KrakenTradeTypes'

export interface KrakenBlotterRootState {
    tickerData: BlotterData<TransformedTickerDetails>
    ohlcData: BlotterData<TransformedOhlcDetails>
    tradeData: BlotterData<TransformedTradeDetails>
}