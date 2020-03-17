import { useState, useEffect } from "react";
import { KrakenAssetPairsResult } from './types/KrakenAssetPairsOutputTypes';
import { CurrencyPair } from '../types/KrakenCommonDataTypes';

const useFetch = (url: string) => {
    const [response, setResponse] = useState({error: [], result: {}});
    const proxy = "https://cors-anywhere.herokuapp.com/"
    useEffect(() => { 
        const fetchData = async () => {
            setResponse(await fetch(proxy + url).then(res => res.json()));
        }
        fetchData();
    }, [url]);
    return response;
};

export const useKrakenCurrencyPairs = (): CurrencyPair[] => {
    const assetPairs: KrakenAssetPairsResult = useFetch("https://api.kraken.com/0/public/AssetPairs")
    return Object.values(assetPairs.result).map(assetPair => assetPair.wsname);
}