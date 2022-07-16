import Head from 'next/head';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  console.log({results});
  return (
    <div className=''>
      <Head>
        <title>IMDB Clone</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* RESULTS */}
      <Results  />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending';
  const request = await fetch(`
  https://api.themoviedb.org/3${requests[genre].url}
  `).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
