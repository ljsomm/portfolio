import { Head, NextScript, Main, Html } from "next/document";
const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="canonical" href="https://lucasjsdev.com/" />
        <meta
          name="description"
          content="Site developed by Lucas Juan Souza de Oliviera Miranda Moraes, Software Engineer."
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
