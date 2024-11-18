import { findBySlug } from "@/stores/mushrooms"

// when doing static meta - just export an object called metadata

// when you need to dynamically create your metadata (dynamic routes) - export a function called genereteMetdata

// that function returns the object of us just creating it. 

export async function generateMetadata({params}) {
    const slug = (await params).slug

    console.log(`metadata: `, slug)
    const mushroomsInfo = findBySlug(slug)

    return {
        title: `${mushroomsInfo.slug} | Information`,
        description: ` ${mushroomsInfo.description} Learn more about`
    }
}

export default async function Page({params}) {
    // console.log(params)
    const slug = (await params).slug
    const mushroomInfo = findBySlug(slug)

    //{ params: { slug: 'shiitake-mushrooms' }, searchParams: {} }
    return (
        <div>
            <h2>{mushroomInfo.slug}</h2>
            {/* <img src={mushroomInfo.image} /> */}
            <br />
            <p>{mushroomInfo.description}</p>
            <p>{mushroomInfo.climate}</p>
        </div>
    )
}