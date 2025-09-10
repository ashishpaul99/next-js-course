import type { Metadata } from "next";

export const metadata:Metadata={
    title:"Users Posts"
}
type Props={
    promise:Promise<Post[]>
}

export default async function UserPosts({promise}:Props){

    const posts=await promise;
    const content=posts.map(post=>(
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br/>
        </article>
    ));
    return content
}