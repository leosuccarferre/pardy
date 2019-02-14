import React, { useState } from "react";
import Nav from "./Nav";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children }) => (
  <div>
    <Head>
      <title>Hello</title>
    </Head>
    <Nav />
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>

    {/* <style global jsx>
      {`
        body {
          font-family: "Arbutus Slab", serif !important;
        }
      `}
    </style> */}

  </div>
);
