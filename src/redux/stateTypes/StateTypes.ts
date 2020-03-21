import {BlotterData} from '../../types/CommonTypes'
import {TransformedTickerDetails} from '../../types/KrakenTickerTypes'
import { TransformedOhlcDetails } from '../../types/KrakenOhlcTypes'
import { TransformedTradeDetails } from '../../types/KrakenTradeTypes'
import { TransformedSpreadDetails } from '../../types/KrakenSpreadTypes'

export interface KrakenBlotterRootState {
    tickerData: BlotterData<TransformedTickerDetails>
    ohlcData: BlotterData<TransformedOhlcDetails>
    tradeData: BlotterData<TransformedTradeDetails>
    spreadData: BlotterData<TransformedSpreadDetails>
}