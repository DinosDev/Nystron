import { createGlobalStyle } from 'styled-components'
import FontObj from '../src/themes/Font.json'
import React from "react";
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
    body, body * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        font-family: ${FontObj.FontFamily};
    }
`

export default function MyApp({ Component, pageProps }: any) {
    return (
        <React.Fragment>
            <Head>
                <title>Madeireira Nystron</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </React.Fragment>
    )
}
