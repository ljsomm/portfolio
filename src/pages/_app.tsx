import { AppProps } from "next/app";
import "../styles/global.scss";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component titlePrefix="Lucas Juan" {...pageProps} />
    </Layout>
  );
};

export default App;
