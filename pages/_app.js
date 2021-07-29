import Layout from '../components/layout'
import '../guialet.css'

export default function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <head>
        <title>GuiaLET</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <Component {...pageProps} />
      </Layout>
    )
  }