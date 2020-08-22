import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            type="image/png"
            href="/images/icons/icon-72x72.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="font-sans text-lg antialiased container mx-auto max-w-5xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
