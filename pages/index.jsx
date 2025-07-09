'use client'

// pages/index.js
import Menu from '@/components/menu';
import Head from 'next/head';
// import 'globals.css'
import '@/styles/globals.css'
import NavBar from '@/components/nav';
import Footer from '@/components/footer';



// import Menu from '../components/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>منوی رستوران</title>
        <meta name="description" content="منوی غذاهای ایرانی خوشمزه" />
      </Head>
      <main>
			<NavBar />
         <Menu />
			<Footer />
      </main>
    </>
  );
}