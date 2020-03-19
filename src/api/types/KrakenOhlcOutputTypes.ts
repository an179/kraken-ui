export type Ohlc = [BigInteger, OhlcDetails, string, string]

export type OhlcDetails = [
    Time,
	ETime,
	Open,
	High,
	Low,
	Close,
	VWap,
	Volume,
	Count
]

type Time = number
type ETime = number
type Open = number
type High = number
type Low = number
type Close = number
type VWap = number
type Volume = BigInteger
type Count = BigInteger
