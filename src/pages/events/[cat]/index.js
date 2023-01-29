import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const EventsCatPage = ({data, pageName}) => {
    const generateEventUrl = (event) => {
        return `/events/${ev.city}/${ev.id}`;
    }

// LINKS next.js will create each Link pages, every time we use the link component we're pointing into
// internal page, a page we have in the pages folder  
    return (
        <div>
            <h1>Events In {pageName}</h1>
            <div>
            {data.map((ev) => (
                <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                    <Fragment>
                        <Image src={ev.image} alt={ev.title} width={300} height={300} />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Fragment>
                </Link>
            ))}

            </div>  
        </div>  
    )
}

export default EventsCatPage;

//we need to tell next.js exactly how many pages it needs to create for us at build time
//to do this: we will need to have a function called get a static path 

export async function getStaticPaths() {

    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(ev =>{
        return {
            params: {
                cat: ev.id.toString(),
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter(ev => ev.city === id)

    return { props: {data, pageName: id }};
}