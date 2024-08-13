import VariableText from "@/components/VariableText";
import Head from "next/head";
import styles from "./styles.module.scss";
import CardList from "@/components/CardList";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { IPageProps } from "@/interfaces/page";
import Presentation from "@/components/svg/Presentation";
import { useAnimate, useInView } from "framer-motion";
import useLateralFadeIn from "@/hooks/useLateralFadeIn";
import Link from "next/link";

const Home = ({ titlePrefix }: IPageProps) => {
  const targetText = useLateralFadeIn(-10, 1);
  const targetImage = useLateralFadeIn(10, 1);

  const jobs = [
    {
      mainText: "Web Developer",
      subText: "Summer, 2021",
    },
    {
      mainText: "Application Developer",
      subText: "IBM, 2021 - 2023",
    },
    {
      mainText: "Senior Application Developer",
      subText: "ZUP, 2023 - 2024",
    },
    {
      mainText: "Senior Serverless Developer",
      subText: "SG, 2024 - Present",
    },
  ];

  return (
    <>
      <Head>
        <title>{titlePrefix}</title>
      </Head>
      <section className={styles["main-content"]}>
        <VariableText textList={jobs}></VariableText>
      </section>
      <section className={styles["section"]}>
        <CardList
          type="vertical"
          data={[
            {
              title: "Front-end",
              description: (
                <div className={styles.description}>
                  <Image
                    src="/icons/react.svg"
                    alt="React icon"
                    width={70}
                    height={70}
                    title="React"
                  />
                  <Image
                    src="/icons/angular.svg"
                    alt="Angular icon"
                    width={70}
                    height={70}
                    title="Angular"
                  />
                  <Image
                    src="/icons/jquery.svg"
                    alt="JQuery icon"
                    width={70}
                    height={70}
                    title="JQuery"
                  />
                </div>
              ),
            },
            {
              title: "Back-end",
              description: (
                <div className={styles.description}>
                  <Image
                    src="/icons/nodejs.svg"
                    alt="NodeJS icon"
                    width={70}
                    height={70}
                    title="NodeJS"
                  />
                  <Image
                    src="/icons/nestjs.svg"
                    alt="NestJS icon"
                    width={70}
                    height={70}
                    title="NestJS"
                  />
                  <Image
                    src="/icons/spring.svg"
                    alt="Spring icon"
                    width={70}
                    height={70}
                    title="Spring"
                  />
                </div>
              ),
            },
            {
              title: "Cloud",
              description: (
                <div className={styles.description}>
                  <Image
                    src="/icons/aws-ccp.svg"
                    alt="AWS Cloud Practictioner icon"
                    width={70}
                    height={70}
                    title="AWS Cloud Practictioner"
                  />
                  <Image
                    src="/icons/kubernetes.svg"
                    alt="Kubernetes icon"
                    width={70}
                    height={70}
                    title="Kubernetes"
                  />
                </div>
              ),
            },
          ]}
        ></CardList>
      </section>
      <section className={styles.section}>
        <div ref={targetText}>
          <h3 className={styles.title}>Going beyond</h3>
          <p className={styles.paragraph}>
            Hello World, I'm Lucas Juan Souza, a FullStack Developer!
          </p>
          <p className={styles.paragraph}>
            Although I am Developer I also love helping people to ascend in
            their careers. Every time I have the chance, I do presentations for
            students and newer coleagues in this amazing IT's world.
          </p>
          <p className={styles.paragraph}>
            I continuously write some articles, you can check them{" "}
            <Link target="_blank" href={"https://medium.com/@lucasjuansomm"}>
              here
            </Link>
            .
          </p>
        </div>
        <div ref={targetImage}>
          <Presentation />
        </div>
      </section>
    </>
  );
};

export default Home;
