import { getSession } from "next-auth/react"

export default function Blog({data}) {
    return (
        <div>Blog pages - {data}</div>
    )
}



export async function getServerSideProps(conntext) {
    const session = await getSession(conntext);

    if(!session){
        return {
            redirect: {
                destination: `/api/auth/signin?calbackUrl=http://localhost:3000/blog`,
                permanant: false
            }
        }
    }
    return {
        props: {
            data: session ? "List of 100 personalized blogs" : "List of free blogs"
        }
    }
}