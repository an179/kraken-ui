import { useState, useEffect } from "react";
import { KrakenAssetPairsResult } from './KrakenOutputTypes';
import { CurrencyPair } from './KrakenDataTypes';

const useFetch = (url: string) => {
    const [response, setResponse] = useState({error: [], result: {}});
    const proxy = "https://cors-anywhere.herokuapp.com/"
    useEffect(() => { 
        const fetchData = async () => {
            const res = await fetch(proxy + url);
            const json = await res.json();
            setResponse(json);
        }
        fetchData();
    }, [url]);
    return response;
  };

export const useKrakenCurrencyPairs = (): CurrencyPair[] => {
    const assetPairs: KrakenAssetPairsResult = useFetch("https://api.kraken.com/0/public/AssetPairs")
    return Object.values(assetPairs.result).map(assetPair => assetPair.wsname);
}