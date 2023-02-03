import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const CatEvent = (data, pageName) => {
  return (
    <div className='cat_events'>
        <h1>Events In {pageName}</h1>
        <div className='content'>
        {data.map((ev) => {
        <Link className='card' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <>
                <Image src={ev.image} alt={ev.title} width={300} height={300} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            </>
        </Link>
        })}
        </div>  
    </div>  
  )
}

export default CatEvent;

// LINKS next.js will create each Link pages, every time we use the link component we're pointing into
// internal page, a page we have in the pages folder  
//     const generateEventUrl = (event) => {
//    return `/events/${ev.city}/${ev.id}`;
// }