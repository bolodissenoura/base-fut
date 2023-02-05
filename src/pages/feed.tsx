import Head from "next/head";
import Image from "next/image";

export default function Feed() {
  
  return (
    <>
      <Head>
        <title>⚽️BVF - Feed</title>
        <meta name="description" content="Seu feed de videos e propostas no futebol de base" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <h1 className="mx-auto">feed</h1>
      </main>
    </>
  );
}
