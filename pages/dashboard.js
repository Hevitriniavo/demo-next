"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

export default function Profile() {
    const router = useRouter();
    const [token, setToken] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            const response = await fetch('http://localhost:8080/api/users', {
                headers: {
                    Authorization: `Bearer ${session.user.accessToken}`,
                },
            });
            if (response.ok) {
                const userData = await response.json();
                console.log(userData);
            } else {
                console.error('Failed to fetch user data');
            }
            setToken(session.user.accessToken)
        };
       
        fetchData();
    }, []);

    return (
        <div>
            <h1>Profile Page {token}</h1>
        </div>
    );
}
