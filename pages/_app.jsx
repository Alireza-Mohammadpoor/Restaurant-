// // pages/_app.js
// import '@/styles/globals.css';
// import '@/styles/fonts.module.css';


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }





import Head from 'next/head';
import '@/styles/globals.css';
import '@/styles/fonts.css'; // ✅ use plain `.css`, not `.module.css`
// In layout.js or _app.js
// import { Pacifico } from 'next/font/google';

// const pacifico = Pacifico({ weight: ['400'], subsets: ['latin'], display: 'swap' });



export default function App({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Load Pacifico font */}
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <Component {...pageProps} />
    </>
  );
}
