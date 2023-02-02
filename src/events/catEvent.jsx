import React from 'react'

function CatEvent () {
  return (
    <div>
        <h1>Events In {pageName}</h1>
    
        <div>
        {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
            <>
                <Image src={ev.image} alt={ev.title} width={300} height={300} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            </>
        </Link>
        ))}
        </div>  
    </div>  
  )
}

export default CatEvent;