export interface IResponseCurrency {
    data: IRates
}

export interface IRates {
    rates: Array<any>
}

export interface IRatesFormated {
    symbol: string,
    value: number
}