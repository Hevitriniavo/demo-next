export default function User({ user }) {
    return (
        <div className="bg-gray-800 shadow-md rounded-md p-4 text-white">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-gray-400">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p className="text-gray-400">Phone: {user.phone}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Voir details
            </button>
        </div>
    )
}