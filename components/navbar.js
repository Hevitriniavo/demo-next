import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session, status } = useSession();
    const isLoggedIn = session?.user;
    console.log(session, status);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Mon Site
                </Link>
                <div>
                    <Link href="/blog" className="mr-4">
                        Blog
                    </Link>
                    <Link href="/dashboard" className="mr-4">
                        Dashboard
                    </Link>
                    {isLoggedIn ? (
                        <button onClick={() => signOut()} className="mr-4">
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={() => signIn()} className="mr-4">
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
