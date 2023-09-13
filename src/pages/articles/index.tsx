import { IPageProps } from "@/interfaces/page";
import styles from "./styles.module.scss";
import Head from "next/head";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Lucas Juan - Projects</title>
      </Head>
      <section className={styles.container}>
        <h3 className={styles.title}>Articles</h3>
        {/* <CardList type="horizontal" data={data} /> */}
      </section>
    </>
  );
};

export default Articles;

export async function getServerSideProps() {
  return {
    props: {
      // data: []
    },
  };
}
