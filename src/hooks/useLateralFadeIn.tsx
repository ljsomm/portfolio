import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const useLateralFadeIn = (distance: number, duration: number = 1) => {
  const [target, animate] = useAnimate();
  const isInView = useInView(target);

  useEffect(() => {
    if (!!isInView && !!target.current) {
      !!target.current &&
        animate(
          target.current,
          {
            opacity: 1,
            x: 0,
          },
          {
            duration,
          },
        );
    } else if (!!target.current) {
      animate(
        target.current,
        {
          opacity: 0,
          x: distance,
        },
        {
          duration,
        },
      );
    }
  }, [isInView]);

  return target;
};

export default useLateralFadeIn;
