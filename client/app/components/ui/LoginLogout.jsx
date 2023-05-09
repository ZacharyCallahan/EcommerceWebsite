import axios from "axios";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../AppStateContext";

export default function LoginLogout() {

    const { state, dispatch } = useContext(AppStateContext);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/loggedin", {
                withCredentials: true,
            })
            .then((res) => {
                dispatch({ type: "LOGIN", payload: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const logoutHandler = () => {
        axios
            .post("http://localhost:8000/api/logout", {}, {withCredentials: true})
            .then((res) => {
                dispatch({ type: "LOGOUT", payload: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {state.user ? (
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
