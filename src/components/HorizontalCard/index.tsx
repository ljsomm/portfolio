import { ICardWithLink } from "@/interfaces/card";
import Link from "next/link";
import styles from "./styles.module.scss";

const HorizontalCard = ({ key, title, description, link }: ICardWithLink) => {
  if (!link) {
    return (
      <div key={key} className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <div>{description}</div>
      </div>
    );
  } else {
    return (
      <Link key={key} className={styles.link} href={link} target="_blank">
        <div className={styles.container}>
          <h4 className={styles.title}>{title}</h4>
          <p>{description}</p>
        </div>
      </Link>
    );
  }
};

export default HorizontalCard;
