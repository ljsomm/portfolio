import VariableText from "@/components/VariableText";
import Head from "next/head";
import styles from "./styles.module.scss";
import CardList from "@/components/CardList";

const Home = () => {
  const jobs = [
    {
      mainText: "Web Developer",
      subText: "Summer, 2021",
    },
    {
      mainText: "Application Developer",
      subText: "IBM, 2021 - Present",
    },
  ];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles["main-content"]}>
        <VariableText textList={jobs}></VariableText>
      </div>
      <div className={styles["section"]}>
        <CardList
          type="vertical"
          data={
            [
              {
                title: "Front-end",
                description: ""
              },
              {
                title: "Back-end",
                description: ""
              },
              {
                title: "Cloud",
                description: ""
              },
            ]
          }
        ></CardList>
      </div>
    </>
  );
};

export default Home;
