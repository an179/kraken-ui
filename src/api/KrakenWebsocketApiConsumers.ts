import { SubscriptionEvent, KrakenSubscription } from './types/KrakenSubscriptionTypes';
import { useKrakenCurrencyPairs } from './KrakenHttpApiConsumers';
import { useDispatch } from 'react-redux';
import { KrakenBlotterActions } from '../redux/actions/ActionsTypes'

export const useSubscriptionTo = function <TRaw, TConverted> (subscriptionType: KrakenSubscription, treeDataConverter: ((rawData: TRaw) => TConverted), actionCreator: ((data: TConverted) => KrakenBlotterActions<TConverted> )) {    
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
            const data: TConverted | TConverted[] = treeDataConverter(JSON.parse(messageEvent.data));
            console.log(messageEvent.data)
            dispatcher(actionCreator(data));
        } catch (e) {
            console.error('Unable to parse and dispatch ' + JSON.stringify(messageEvent))
        }
    }
}