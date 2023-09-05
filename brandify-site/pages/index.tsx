import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Brandify from "../components/brandify";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brandify | AI Generated Marketing</title>
        <meta
          name="description"
          content="Generate branding snippets for your product."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Brandify />
    </div>
  );
};

export default Home;
