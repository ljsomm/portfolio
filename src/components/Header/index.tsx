import { useState } from "react";
import Burger from "../../../public/icons/burger.svg";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import className from "classnames";
import { useRouter } from "next/router";
import classNames from "classnames";
import Github from "../svg/Github";
import Linkedin from "../svg/Linkedin";

const Header = () => {
  const menuPages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "About me",
      path: "/about-me",
    },
  ];

  const { pathname } = useRouter();
  const [isMenuOpenend, setIsMenuOpened] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logo}>
          <Link href={"/"}>Lucas Juan</Link>
        </h1>
      </div>
      <Image
        className={styles["burger-icon"]}
        src={Burger}
        alt="burger menu"
        onClick={() => {
          setIsMenuOpened(true);
        }}
      ></Image>
      <div
        className={className({
          [styles["links-container"]]: true,
          [styles["links-container__closed"]]: !isMenuOpenend,
        })}
      >
        <div
          className={styles["close-menu-area"]}
          onClick={() => setIsMenuOpened(false)}
        ></div>
        <div className={styles.links}>
          <nav>
            <ul>
              {Array.from(menuPages, (item, key) => {
                return (
                  <li key={key}>
                    <Link
                      onClick={() => setIsMenuOpened(false)}
                      href={item.path}
                      className={classNames({
                        [styles.link__active]: item.path === pathname,
                        [styles.link]: true,
                      })}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.media}>
            <Link href="https://www.linkedin.com/in/ljsomm/" target="_blank">
              <Linkedin height="33px" width="33px" />
            </Link>
            <Link href="https://github.com/ljsomm" target="_blank">
              <Github height="33px" width="33px" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
