import { ICard } from "@/interfaces/card-interfaces";
import VerticalCard from "../VerticalCard";
import styles from "./styles.module.scss";

const cardTypes = {
  "vertical": (card: ICard) => {
    return(
      <VerticalCard {...card}></VerticalCard>
    );
  }
};

const CardList = (
  { type, data } : {type: "vertical", data: ICard[]}
) => {
  return(
    <div className={styles.container}>
      {
        data.map((card: ICard) => {
          return( 
            cardTypes[type](card) 
          );
        })
      }
    </div>
   
  );
}

export default CardList;
