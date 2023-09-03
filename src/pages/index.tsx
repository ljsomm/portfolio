import Image from "next/image";
import Banner from "../../public/images/banner.png";
import Head from "next/head";

const Home = () => {
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Image
                src={Banner}
                alt="Banner"
                height={777}
                width={835}
            />
        </>
    );
}

export default Home;