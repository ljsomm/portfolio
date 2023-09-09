import { ICard } from "@/interfaces/card";
import styles from "./styles.module.scss";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const VerticalCard = ({ title, description }: ICard) => {


  const ref = useRef(null);
  const visibile = useInView(ref);

  useEffect(() => {
    console.log(visibile)
  }, [visibile]);
  return (
    <div ref={ref} className={styles["card"]}>
      <h3 className={styles.title}>{title}</h3>
      {description}
    </div>
  );
};

export default VerticalCard;
