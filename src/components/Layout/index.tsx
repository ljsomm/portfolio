import React from "react";
import Header from "../Header";
import localFont from "next/font/local";

const font = localFont({
    src: "../../assets/fonts/Inter-VariableFont_slnt,wght.ttf"
});

const Layout = ({children} : {children: React.ReactNode}) => {


 

    return(
        <div className={font.className}>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );

}

export default Layout;