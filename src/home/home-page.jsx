import Link from 'next/link';
import Image from 'next/image';

function HomePage ({data}) {
  <div className="home_body">
  </div>
  return(
    <main>
    {data.map((ev) => (
    <Link className='card' key={ev.id} href={`/events/${ev.id}`} passHref>
      <>
        <Image width={300} height={300} alt={ev.title} src={ev.image}/>
        <h2> {ev.title} </h2>
        <p> {ev.description} </p> 
      </>
    </Link>
    ))}
  </main>);
}

export default HomePage;