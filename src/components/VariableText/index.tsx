import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

interface IText {
  mainText: string;
  subText: string;
}

interface IProps {
  textList: IText[];
}

const VariableText = ({ textList }: IProps) => {
  const [currentText, setCurrentText] = useState<number>(0);
  const [currentLetter, setCurrentLetter] = useState<number>(0);
  const [isBackSpace, setIsBackSapce] = useState<boolean>(false);

  useEffect(() => {
    if (
      (!!isBackSpace && currentLetter > 0) ||
      (!!textList[currentText] &&
        !isBackSpace &&
        currentLetter < textList[currentText].mainText.length)
    ) {
      setTimeout(
        () => {
          setCurrentLetter(
            !isBackSpace ? currentLetter + 1 : currentLetter - 1,
          );
        },
        !!isBackSpace ? 50 : 100,
      );
    } else if (
      !!textList[currentText] &&
      !isBackSpace &&
      currentLetter === textList[currentText].mainText.length
    ) {
      setTimeout(() => {
        setIsBackSapce(true);
      }, 2500);
    } else if (!!isBackSpace && currentLetter === 0) {
      setCurrentText(currentText < textList.length - 1 ? currentText + 1 : 0);
      setIsBackSapce(false);
    }
  }, [currentLetter, isBackSpace]);

  return (
    <div>
      <div className={styles["maintext-container"]}>
        <h3 className={styles.maintext}>
          {" "}
          {">"} {textList[currentText]?.mainText.substring(0, currentLetter)}
        </h3>
        <span className={styles.twinkle}>_</span>
      </div>
      {
        <motion.div
          initial="hide"
          variants={{
            hide: {
              color: "rgba(241, 241, 241, 0)",
            },
            show: {
              color: "rgba(255, 255, 255, 0.82)",
            },
          }}
          animate={
            (currentLetter * 100) / textList[currentText].mainText.length >
            (!isBackSpace ? 25 : 50)
              ? "show"
              : "hide"
          }
        >
          <h4 className={styles.subtext}>{textList[currentText]?.subText}</h4>
        </motion.div>
      }
    </div>
  );
};

export default VariableText;
