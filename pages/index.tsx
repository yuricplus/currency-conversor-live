import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import { getListCurrencyService, formartSymbolsObject } from "../shared/services/api-currency";
import { IRatesFormated, IResponseCurrency } from '../shared/services/interfaces/response-interface'

export default function Home() {
    const [currency, setCurrency]:any = useState([]);

    const getList = ():void => {
        getListCurrencyService().then((response: IResponseCurrency) => {
            const rates = formartSymbolsObject(response.data.rates);
            setCurrency(rates);
        });
    }

    useEffect(() => {
       getList();
    }, [])

    return (<section className={styles.container}>
        <h1 className={styles.title}>live Conversor currency</h1>
        <p className={styles.title}>select currency to convert</p>
        <form action="">
            <div className={styles.input_group}>
                <select className={styles.select} name="current-currenty" id="current-currenty">
                    {currency.map((rates: IRatesFormated) => {
                        return (<option value={rates.value} key={rates.symbol}>{rates?.symbol} | { rates.value}</option>)
                    })}
                </select>
            </div>

            <div className={styles.input_group}>
                <select className={styles.select} name="current-currenty" id="current-currenty">
                    {currency.map((rates: IRatesFormated) => {
                        return (<option value={rates.value} key={rates.symbol+rates.value}>{rates?.symbol} | { rates.value}</option>)
                    })}
                </select>
            </div>
        </form>
    </section>
    )
}