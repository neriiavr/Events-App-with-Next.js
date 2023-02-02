import AllEvents from '@/events/events-page';

function EventsPage ({data}) {

    return (
        <AllEvents data={data} />
    )
}

export default EventsPage;
 

//now next.js will statically pre-render all the paths specified by getStaticPaths
//can place it above or below page, cant be nested in another function 
export async function getStaticProps () {
    const { events_categories } = await import('/data/data.json')

    return {
        props: {
            data: events_categories,
        }
    }
}