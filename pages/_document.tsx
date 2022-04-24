import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
          </Head>

          <body>
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
