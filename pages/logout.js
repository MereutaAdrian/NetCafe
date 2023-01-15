import useAuth from "hooks/useAuth";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { useEffect } from "react";

function Logout() {
    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.removeItem('userData');
            router.push('/');
        }
    })

    return <></>
}

export default dynamic(() => Promise.resolve(Logout), {
    ssr: false
})