import { SubscriptionEvent, KrakenSubscription } from './types/KrakenSubscriptionTypes';
import { useKrakenCurrencyPairs } from './KrakenHttpApiConsumers';
import { updateData } from '../redux/actions/ActionCreators';
import { useDispatch } from 'react-redux';
import { TreeStructuredData } from '../types/CommonTypes';

export const useSubscriptionTo = function <TRaw, TConverted extends TreeStructuredData> (subscriptionType: KrakenSubscription, treeDataConverter: ((rawData: TRaw) => TConverted)) {    
    const dispatcher = useDispatch()

    const krakenSocket: WebSocket = new WebSocket("wss://ws.kraken.com");
    const subscriptionEvent: SubscriptionEvent = {
        event: "subscribe",
        pair: useKrakenCurrencyPairs(),
        subscription: {
            name: subscriptionType
        }
    }

    krakenSocket.onopen = () => {
        krakenSocket.send(JSON.stringify(subscriptionEvent))
    }
    krakenSocket.onerror = (errorEvent: Event) => {
        console.error("Ticker socket encountered error: " + errorEvent);
    }
    krakenSocket.onclose = (closeEvent: CloseEvent) => {
        console.log("Ticker socket closed: " + closeEvent)
    }
    krakenSocket.onmessage = (messageEvent: MessageEvent) => {
        try {
            console.log(messageEvent.data)
            const tickerData: TConverted = treeDataConverter(JSON.parse(messageEvent.data));
            dispatcher(updateData(tickerData));
        } catch (e) {
            console.error('Unable to parse and dispatch ' + JSON.stringify(messageEvent))
        }
    }
}