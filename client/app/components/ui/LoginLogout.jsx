import axios from "axios";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function LoginLogout() {
    const [isloggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/loggedin", {
                withCredentials: true,
            })
            .then((res) => {
                setIsLoggedIn(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const logoutHandler = () => {
        console.log("logout");
        axios
            .post("http://localhost:8000/api/logout", {}, {withCredentials: true})
            .then((res) => {
                setIsLoggedIn(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {isloggedIn ? (
                <Button
                    className="flex items-center"
                    onClick={() => logoutHandler()}>
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
