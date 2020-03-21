export type Spread = [BigInteger, SpreadDetails, string, string]

export type SpreadDetails = [
    Bid,
	Ask,
	Timestamp,
	BidVolume,
	AskVolume
]

type Bid = number
type Ask = number
type Timestamp	= number
type BidVolume = number
type AskVolume = number