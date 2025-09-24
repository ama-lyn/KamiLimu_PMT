import type { NextPage } from "next";
import Head from "next/head";
import ComicPanel from "@/components/ComicPanel";

const panelImages = [
  "/images/Scene 1.png",
  "/images/Scene 2.png",
  "/images/Scene 3.png",
  "/images/Scene 4.png",
  "/images/Scene 5.png",
  "/images/Scene 6.png",
  "/images/Scene 7.png",
  "/images/Scene 8.png",
  "/images/Scene 9.png",
  "/images/Scene 10.png",
  "/images/Scene 11.png",
];

const Comic: NextPage = () => {
  return (
    <>
      <Head>
        <title>KamiLimu Month 5: The Journey</title>
        <meta name="description" content="An interactive comic book." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen flex overflow-x-auto scroll-snap-type-x-mandatory">
        {panelImages.map((imageUrl, index) => (
          <ComicPanel key={index} imageUrl={imageUrl} />
        ))}
      </main>
    </>
  );
};

export default Comic;