import Button from "./Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function LoginLogout() {
    const [isloggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (Cookies.get("usertoken")) setIsLoggedIn(true);
    }, []);

    const handleLogout = () => {
        Cookies.remove("usertoken");
        setIsLoggedIn(false);
        window.location.href = "/login";
    };

    return (
        <>
            {isloggedIn ? (
                <Button className="flex items-center" onClick={handleLogout}>
                    LOGOUT
                </Button>
            ) : (
                <Button className="flex items-center" link="/login">
                    LOGIN
                </Button>
            )}
        </>
    );
}
