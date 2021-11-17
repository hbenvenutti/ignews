import NextDocument, {Html, Head, Main, NextScript} from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>ig.news</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}
