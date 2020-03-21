import {TreeStructuredData} from './CommonTypes'
import {Trade} from '../api/types/KrakenTradeOutputTypes'

export interface TransformedTradeDetails extends TreeStructuredData {
    price: number,
	volume: number,
	time: number,
	side: string,
	orderType: string
}

export const transformTradeData = (data: Trade): TransformedTradeDetails[] => {
    return data[1].map(singleTrade => {
        return {
            currencyPair: data[3],
            price: singleTrade[0],
            volume: singleTrade[1],
            time: singleTrade[2],
            side: singleTrade[3],
            orderType: singleTrade[4],
        }
    });
}
