import { ICard } from "@/interfaces/card";
import VerticalCard from "../VerticalCard";
import styles from "./styles.module.scss";
import HorizontalCard from "../HorizontalCard";

const cardTypes = {
  vertical: (card: ICard) => {
    return <VerticalCard {...card} />;
  },
  horizontal: (card: ICard) => {
    return <HorizontalCard {...card} />;
  },
};

const CardList = ({
  type,
  data,
}: {
  type: "vertical" | "horizontal";
  data: ICard[];
}) => {
  return (
    <div className={styles[`container__${type}`]}>
      {data.map((card: ICard, key: number) => {
        return cardTypes[type]({ ...card, key });
      })}
    </div>
  );
};

export default CardList;
