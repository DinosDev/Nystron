import { Html, Head, Main, NextScript } from 'next/document'
import FontObj from '../src/themes/Font.json'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href={FontObj.Preconnect.GoogleApis} />
                <link rel="preconnect" href={FontObj.Preconnect.GStatic} />
                <link rel="stylesheet" href={FontObj.Link} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}