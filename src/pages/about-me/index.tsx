import styles from "./styles.module.scss";
import Image from "next/image";
import Profile from "../../../public/images/profile-lucas-juan.jpg";
import Head from "next/head";
const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Lucas Juan - About me</title>
      </Head>
      <div className={styles.container}>
        <div className={styles["splitted-content"]}>
          <div>
            <Image
              height={420}
              width={420}
              src={Profile}
              alt="Lucas Juan Souza de Oliveira Miranda Moraes photo"
              title="Lucas Juan Souza de Oliveira Miranda Moraes"
            />
          </div>
          <div>
            <h2>Who is Lucas Juan?</h2>
            <p>
              I am a Senior Software Developer who has more than 4 years of work
              experience. I Developed features both in Front-end and Back-End
              that has reflected as impact on the companies results.
            </p>
            <p>
              Every time, when it's possible, I apply the best principles in
              software engineering for projects and teams that I have
              experienced with, like: Git Flow, Dockerizing, TDD and more.
            </p>
            <p>
              Furthermore, I've also done some tech leading and on boardings
              activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
