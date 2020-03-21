import {TreeStructuredData} from './CommonTypes'
import {Spread} from '../api/types/KrakenSpreadOutputTypes'

export interface TransformedSpreadDetails extends TreeStructuredData {
    bid: number,
	ask: number,
	timestamp: number,
	bidVolume: number,
	askVolume: number
}

export const transformSpreadDetails = (data: Spread): TransformedSpreadDetails => {
    return {
        currencyPair: data[3],
        bid: data[1][0],
        ask: data[1][1],
        timestamp: data[1][2],
        bidVolume: data[1][3],
        askVolume: data[1][4],
    }
}
