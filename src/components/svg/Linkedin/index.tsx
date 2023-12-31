import styles from "./styles.module.scss";

const Linkedin = ({
  height,
  width,
  color = "white",
}: {
  height: string;
  width: string;
  color?: string;
}) => {
  return (
    <svg
      className={styles.svg}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1000 1000"
    >
      <path
        id="path"
        fill={color}
        d=" M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508"
        transform=""
      ></path>
    </svg>
  );
};

export default Linkedin;
