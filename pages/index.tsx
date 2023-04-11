import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rifqi Agnia Mubarok | Front end developer</title>
        <meta name="description" content="Rifqi Agnia Mubarok" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>
        <div>
          <h1>Rifqi Agnia Mubarok</h1>
        </div>
        <div>
          <p>Frontend Developer</p>
        </div>
      </main>
    </>
  );
}
