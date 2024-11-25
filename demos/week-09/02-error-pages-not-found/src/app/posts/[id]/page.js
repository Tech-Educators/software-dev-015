import { notFound } from "next/navigation"

export default async function Page({params}) {

    // give us the id!
    const id = (await params).id
    console.log(id)
    // fetch some posts from the JSON placeholder api
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // what language should we read the response as.
    const post = await res.json()

    console.log(post)
    // run an ifstatement if that post's information cannot found, to then display the not-found page
    // empty objects are considered to be truthy, so we need to check that it doesn't contain any properties.
    // object.keys(post).length === 0
    
    if (!post.body) {
        notFound()
    }

    return (

       <>
       <h2>This post is: {id}</h2>
        {post ? <div>
            {post.title}
            <p>{post.body}</p>
        </div> : ''}
        </>
    )
}