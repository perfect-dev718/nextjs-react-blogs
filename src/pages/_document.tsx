import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

const prod = process.env.NODE_ENV === 'production';

class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" media="print" href="/styles/print.css" />
          <link rel="shortcut icon" href="/favicon.jpg" />
          <link rel="preload" href="/fonts/Montreal-Bold.otf" as="font" crossOrigin="anonymous" />
          <link
            rel="preload"
            href="/fonts/Montreal-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />

          {prod ? <>{/* Load any prod scripts */}</> : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
