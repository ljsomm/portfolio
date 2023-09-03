import { useState } from "react";
import Burger from "../../../public/icons/burger.svg";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import Linkedin from "../../../public/images/linkedin.svg";
import Git from "../../../public/images/github.svg";
import className from "classnames";


const Header = () => {


    const [isMenuOpenend, setIsMenuOpened] = useState(false); 

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logo}>
                    <Link href={"/"}>
                        Lucas Juan
                    </Link>
                </h1>  
            </div>
            <div className={
                    className({
                        [styles["links-container"]]: true,
                        [styles["links-container__closed"]]: !isMenuOpenend
                    })
                }>
                <div className={styles.links}>
                    <nav>
                        <ul>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/projects"}>Projects</Link>
                            </li>
                            <li>
                                <Link href={"/articles"}>Articles</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.media}>
                        <Link href="https://www.linkedin.com/in/ljsomm/">
                            <Image
                                src={Linkedin}
                                alt="linkedin"
                                title="Linkedin"
                            />
                        </Link>

                        <Link href="https://github.com/ljsomm">
                            <Image
                                src={Git}
                                alt="github"
                                title="Github"
                            />
                        </Link>
                    </div>
                </div>
            </div>
           
        </header>
    );
}

export default Header;