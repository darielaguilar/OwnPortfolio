import Head from 'next/head'
import Image from 'next/image'

import { NavBar } from './components/NavBar'
import { ImageWrapper } from './components/ImageWrapper'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Dariel Aguilar portfolio</title>
        <meta name="description" content="My name is Dariel Aguilar and this is my website where I describe my projects and skill" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <ImageWrapper src='/sunset-portfolio.jpg' height={150} width={300}></ImageWrapper>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Dariel Aguilar portfolio!</a>
        </h1>

        

        <div className={styles.grid}>
          <a href="https://habana-hard-dance-next-js.vercel.app/" className={styles.card}>
            <h2>Habana Hard Dance &rarr;</h2>
            <p>A landing page about a local Hardstyle dj group made with React,NextJS and Tailwindcss.</p>
          </a>

          <a href="https://nestjs-e-commerce.herokuapp.com/" className={styles.card}>
            <h2>Online e-commerce &rarr;</h2>
            <p>This is a online store made with React, NestJS,MySQL and Bootstrap 5</p>
          </a>

          <a
            href="https://github.com/darielaguilar"
            className={styles.card}
          >
            <h2>GitHub Profile &rarr;</h2>
            <p>Here you can see all my projects the finished and not so.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div >
          <small>Copyright 2022 &copy;</small>
        </div>
        <div className={styles.faContainer}>
          <a  href="https://www.facebook.com/DarielAguilar9612/" className="fa  fa-facebook order-3 my-3 "/>
          <a  href="#" className="fa fa-instagram my-3 order-1"/>
          <a  href="https://www.linkedin.com/in/dariel-aguilar-3475a1187/" target="_blank" rel="noreferrer" className=" fa fa-linkedin my-3 order-1"/>
          <a  href="https://github.com/darielaguilar" target="_blank" rel="noreferrer" className="sm:transition ease-in delay-150 duration-300 hover:scale-150 hover:-translate-y-1 fa fa-github my-3 order-1"/>
        </div>
      </footer>
    </div>
  )
}
