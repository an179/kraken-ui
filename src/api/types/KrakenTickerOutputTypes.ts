import {Price, WholeLotVolume, LotVolume, HistoricLotVolume, HistoricPrice, TradeCount, HistoricTradeCount} from '../../types/CommonTypes';

export type Ticker = [BigInteger, TickerDetails, string, string]

interface TickerDetails {
    a: Ask
    b: Bid
    c: Close
    v: Volume
    p: VolumeWeightedAveragePrice
    t: NumberOfTrades
    l: LowPrice
    h: HighPrice
    o: OpenPrice
}

type Ask = [Price, WholeLotVolume, LotVolume]
type Bid = [Price, WholeLotVolume, LotVolume]
type Close = [Price, LotVolume]
type Volume = [LotVolume, HistoricLotVolume]
type VolumeWeightedAveragePrice = [Price, HistoricPrice]
type NumberOfTrades = [TradeCount, HistoricTradeCount]
type LowPrice = [Price, HistoricPrice]
type HighPrice = [Price, HistoricPrice]
type OpenPrice = [Price, HistoricPrice]