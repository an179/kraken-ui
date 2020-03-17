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
type Volume = [LotVolume, HistoryicLotVolume]
type VolumeWeightedAveragePrice = [Price, HistoricPrice]
type NumberOfTrades = [TradeCount, HistoricTradeCount]
type LowPrice = [Price, HistoricPrice]
type HighPrice = [Price, HistoricPrice]
type OpenPrice = [Price, HistoricPrice]

type Price = Number
type HistoricPrice = Number
type WholeLotVolume = BigInteger
type LotVolume = Number
type HistoryicLotVolume = Number
type TradeCount = BigInteger
type HistoricTradeCount = BigInteger

export interface TickerDetailsForAgGrid {
    currencyPair: string

    askPrice: Price
    askWholeLotVolume: WholeLotVolume
    askLotVolume: LotVolume

    bidPrice: Price
    bidWholeLotVolume: WholeLotVolume
    bidLotVolume: LotVolume

    closePrice: Price
    closeLotVolume: LotVolume

    volume: LotVolume
    historicVolume: HistoryicLotVolume

    volumeWeightedAveragePrice: Price
    historicVolumeWeightedAveragePrice: HistoricPrice

    numberOfTrades: TradeCount
    historicTradeCount: HistoricTradeCount

    lowPrice: Price
    historicLowPrice: HistoricPrice

    highPrice: Price
    historicHighPrice: HistoricPrice

    openPrice: Price
    historicOpenPrice: HistoricPrice
}

export const transformTickerData = (data: Ticker): TickerDetailsForAgGrid => {
    return {
        currencyPair: data[3],

        askPrice: data[1].a[0],
        askWholeLotVolume: data[1].a[1],
        askLotVolume: data[1].a[2],
    
        bidPrice: data[1].b[0],
        bidWholeLotVolume: data[1].b[1],
        bidLotVolume: data[1].b[2],
    
        closePrice: data[1].c[0],
        closeLotVolume: data[1].c[1],
    
        volume: data[1].v[0],
        historicVolume: data[1].v[1],
    
        volumeWeightedAveragePrice: data[1].p[0],
        historicVolumeWeightedAveragePrice: data[1].p[1],
    
        numberOfTrades: data[1].t[0],
        historicTradeCount: data[1].t[1],
    
        lowPrice: data[1].l[0],
        historicLowPrice: data[1].l[1],
    
        highPrice: data[1].h[0],
        historicHighPrice: data[1].h[1],
    
        openPrice: data[1].o[0],
        historicOpenPrice: data[1].o[1]
    }
}