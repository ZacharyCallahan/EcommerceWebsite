import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../AppStateContext";
import Button from "./Button";

export default function LoginLogout() {
    const { state, dispatch } = useContext(AppStateContext);

    const logoutHandler = () => {
        axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/logout`,
                {},
                { withCredentials: true }
            )
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
