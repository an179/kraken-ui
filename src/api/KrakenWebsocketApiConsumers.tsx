import { SubscriptionEvent, KrakenSubscription } from './KrakenSubscriptionTypes';
import { useKrakenCurrencyPairs } from './KrakenHttpApiConsumers';

export const useSubscriptionTo = (subscriptionType: KrakenSubscription) => {
    const krakenSocket: WebSocket = new WebSocket("wss://ws.kraken.com");
    const subscriptionEvent: SubscriptionEvent = {
        event: "subscribe",
        pair: useKrakenCurrencyPairs(),
        subscription: {
            name: subscriptionType
        }
    }
    krakenSocket.onopen = () => krakenSocket.send(JSON.stringify(subscriptionEvent))
    krakenSocket.onerror = (errorEvent: Event) => console.error("Ticker socket encountered error: " + errorEvent);
    krakenSocket.onclose = (closeEvent: CloseEvent) => console.log("Ticker socket closed: " + closeEvent)
    krakenSocket.onmessage = (messageEvent: MessageEvent) => console.log("Ticker socket recieved: " + messageEvent.data)
}