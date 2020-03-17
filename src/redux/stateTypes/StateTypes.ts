import {BlotterData} from '../../types/CommonTypes'
import {TransformedTickerDetails} from '../../types/KrakenTickerTypes'

export interface KrakenBlotterRootState {
    tickerData: BlotterData<TransformedTickerDetails>
}