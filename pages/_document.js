import Document, { Html, Head, Main, NextScript } from 'next/document'

import { injectgTagScript, injectLfTracker } from '../gtag'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {injectgTagScript()}
          {injectLfTracker()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
