import {TreeStructuredData} from './CommonTypes'
import {Ohlc} from '../api/types/KrakenOhlcOutputTypes'

export interface TransformedOhlcDetails extends TreeStructuredData {
    time: number,
	etime: number,
	open: number,
	high: number,
	low: number,
	close: number,
	vwap: number,
	volume: BigInteger,
	count: BigInteger
}

export const transformOhlcData = (data: Ohlc): TransformedOhlcDetails => {
    return {
        currencyPair: data[3],
        time: data[1][0],
        etime: data[1][1],
        open: data[1][2],
        high: data[1][3],
        low: data[1][4],
        close: data[1][5],
        vwap: data[1][6],
        volume: data[1][7],
        count: data[1][8]
    }

}
