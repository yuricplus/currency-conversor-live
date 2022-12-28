import axios from 'axios';

import { IRatesFormated } from './interfaces/response-interface'
const base_url = 'https://api.apilayer.com/';
const API_KEY = 'ry5vLhmoyaoP0zO6dVFTdd1cLOTuwDJB';
const headers = { apikey: API_KEY }

const getListCurrencyService = ():Promise<any> => {
    return axios.get(`${base_url}exchangerates_data/latest`, {
        headers: headers
    });
}

const formartSymbolsObject = (values: any) => {
    const listSymbolsFormatted = [];
    for(const propertie in values) {
        const rate = {
            symbol: propertie,
            value: values[propertie]
        }
        listSymbolsFormatted.push(rate)
    }
    return listSymbolsFormatted;
}

export {
    getListCurrencyService, formartSymbolsObject
}