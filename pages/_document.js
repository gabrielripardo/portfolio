import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
                <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500&display=swap' />
                <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
                <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}