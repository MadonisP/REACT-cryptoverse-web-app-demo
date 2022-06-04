import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '5998b5639bmshde7a9f464e47c96p177596jsn0a4aa3bac373'
}

const baseUrl='https://coinranking1.p.rapidapi.com'



const createRequest=(url)=>({url,headers:cryptoApiHeaders,})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getExchanges:builder.query({
            query:()=> createRequest(`/exchanges`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query:(coinId, timePeriod)=> createRequest(`/coin/${coinId}/history/${timePeriod}`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    usegetCryptoDetailsQuery
} = cryptoApi;