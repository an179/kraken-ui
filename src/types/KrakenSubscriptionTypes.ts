import { CurrencyPair } from "./KrakenDataTypes";

export type KrakenSubscription = "ticker"|"ohlc"|"trade"|"book"|"spread"|"ownTrades"|"openOrders"|"*"

export interface SubscriptionEvent {
    event: "subscribe",
    reqid?: BigInteger,
    pair?: CurrencyPair[],
    subscription: Subscription
}

interface Subscription {
    depth?: BigInteger,
    interval?: BigInteger,
    token?: string,
    name: KrakenSubscription
}