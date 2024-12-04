export async function generateMetadata({ params, searchParams }, parent) {
        const id = (await params).id
      // load the post
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const post = await res.json()
      return {
        title: post.title,
      };
    }