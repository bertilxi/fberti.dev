import "../styles/main.scss";

import "typeface-source-sans-pro";
import "typeface-source-serif-pro";
import "typeface-source-code-pro";

import React from "react";
import App from "next/app";
import Nav from "../components/Nav";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Nav />
        <Component {...pageProps} />
      </>
    );
  }
}
