import User from "@/components/user";

export default function UserList({ users }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-900 p-4">
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}