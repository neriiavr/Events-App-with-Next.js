import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HomePage from '../home/home-page';

export default function Home({ data }) {
  return (
    <>
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <HomePage data={data} />
    </div>

      <main>
        {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <>
            <Image width={300} height={300} alt={ev.title} src={ev.image}/>
            <h2> {ev.title} </h2>
            <p> {ev.description} </p> 
          </>
        </Link>
        ))}
      </main>

    </>
  )
}


export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  
  return {
      props:{
          data: events_categories,
      }
  }
}