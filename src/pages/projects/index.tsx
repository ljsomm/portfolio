import CardList from "@/components/CardList";
import styles from "./styles.module.scss";
import { ICard } from "@/interfaces/card";
import Head from "next/head";

const Projects = ({ data }: { data: ICard[] }) => {
  return (
    <>
      <Head>
        <title>Lucas Juan - Projects</title>
      </Head>
      <section className={styles.container}>
        <h3 className={styles.title}>Projects</h3>
        <CardList type="horizontal" data={data} />
      </section>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/users/ljsomm/repos?type=all&sort=updated",
    {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_JWT}`,
      },
    },
  );
  const data: ICard[] = (await res.json())
    .filter((item: any) => !!item.topics.includes("portfolio-project"))
    .map((item: any) => {
      return {
        title: item.name,
        description: !!item.description ? item.description : "No description.",
        link: item.html_url,
      };
    });
  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}
