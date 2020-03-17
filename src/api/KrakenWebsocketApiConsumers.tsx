import { SubscriptionEvent } from '../types/KrakenSubscriptionTypes';
import { useKrakenCurrencyPairs } from './KrakenHttpApiConsumers';
import { Ticker } from "../redux/TickerTypes"
import { changeData } from '../redux/actions/ActionCreators';
import { useDispatch } from 'react-redux';

export const useSubscriptionToKrakenTicker = () => {    
    const dispatcher = useDispatch()
    const krakenSocket: WebSocket = new WebSocket("wss://ws.kraken.com");
    const subscriptionEvent: SubscriptionEvent = {
        event: "subscribe",
        pair: useKrakenCurrencyPairs(),
        subscription: {
            name: "ticker"
        }
    }

    krakenSocket.onopen = () => krakenSocket.send(JSON.stringify(subscriptionEvent))
    krakenSocket.onerror = (errorEvent: Event) => console.error("Ticker socket encountered error: " + errorEvent);
    krakenSocket.onclose = (closeEvent: CloseEvent) => console.log("Ticker socket closed: " + closeEvent)
    krakenSocket.onmessage = (messageEvent: MessageEvent) => {
        const tickerData: Ticker = JSON.parse(messageEvent.data);
        dispatcher(changeData(tickerData));
    }
}