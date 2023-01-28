import Image from 'next/image';

const EventsCatPage = ({data}) => {
    const generateEventUrl = (event) => {
        return `/events/${ev.city}/${ev.id}`;
    }

    return (
        <div>
            <h1>Events In London</h1>
            <div>
            {data.map(ev => (
                <a key={ev.id} href={generateEventUrl(ev)}>
                    <Image src={ev.image} alt={ev.title} width={300} height={300} />
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </a>
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

    return { props: {data}};
}