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
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <meta name="theme-color" content="#4299e1" />
          <meta
            name="Description"
            content="Fernando Berti · Software Engineer"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            type="image/png"
            href="/images/icons/icon-72x72.png"
          />
        </Head>

        <body className="font-sans text-lg text-gray-800 antialiased container mx-auto max-w-4xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
