import { Head, NextScript, Main, Html } from "next/document";
const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="canonical" href="https://www.lucasjsdev.com/" />
        <meta
          name="description"
          content="Site developed by Lucas Juan Souza de Oliviera Miranda Moraes, Software Engineer."
        ></meta>
        <meta name="robots" content="index,follow"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
