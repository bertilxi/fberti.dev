import "../styles/main.scss";

import Head from "next/head";
import React, { FC } from "react";
import { AppProps } from "next/app";
import Nav from "../components/Nav";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content="#4299e1" />
      <meta name="Description" content="Fernando Berti · Software Developer" />
      <title>Fernando Berti · Software Developer</title>
    </Head>
    <Nav />
    <Component {...pageProps} />
  </>
);

export default MyApp;
