export type Trade = [BigInteger, TradeDetails[], string, string]

export type TradeDetails = [
    Price,
	Volume,
	Time,
	Side,
	OrderType
]

type Price = number
type Volume	= number
type Time = number
type Side = string
type OrderType = string