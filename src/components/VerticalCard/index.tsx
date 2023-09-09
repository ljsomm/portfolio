import { ICard } from "@/interfaces/card-interfaces";
import styles from "./styles.module.scss";
import React from "react";

const VerticalCard = ({ title, description }: ICard) => {
  return (
    <div className={styles["card"]}>
      <h3 className={styles.title}>{title}</h3>
      {description}
    </div>
  );
};

export default VerticalCard;
