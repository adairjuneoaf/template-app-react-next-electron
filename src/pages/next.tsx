import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import { Container } from "../styles/pages/homeAndNext";

const Next: NextPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Next - Template Electron App</title>
      </Head>

      <Container>
        <h1>Página {router.asPath}</h1>
      </Container>
    </React.Fragment>
  );
};

export default Next;
