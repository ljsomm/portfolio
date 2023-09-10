import { ICard } from "@/interfaces/card";
import styles from "./styles.module.scss";
import React, { useEffect, useRef } from "react";
import { useAnimate, useInView } from "framer-motion";

const VerticalCard = ({ title, description }: ICard) => {
  const [target, animate] = useAnimate();
  const visibile = useInView(target);

  useEffect(() => {
    if (!!visibile) {
      animate(
        target.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 1,
        },
      );
    } else {
      animate(
        target.current,
        {
          opacity: 0,
          x: -5,
        },
        {
          duration: 1,
        },
      );
    }
  }, [visibile]);

  return (
    <div className={styles["card"]}>
      <h3 className={styles.title}>{title}</h3>
      <div ref={target} className={styles.description}>
        {description}
      </div>
    </div>
  );
};

export default VerticalCard;
