import type { NextPage } from "next";
import Head from "next/head";
import OpeningScreen from "@/components/OpeningScreen";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KamiLimu Month 5: The Journey</title>
        <meta name="description" content="An interactive comic book." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <OpeningScreen />;
      
      </main>
    </>
  );
};

export default Home;