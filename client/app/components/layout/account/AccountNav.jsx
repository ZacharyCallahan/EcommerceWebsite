"use client";
import { useState } from "react";
import Icon from "../../ui/Icon";
import List from "../../ui/lists/List";
import ListItem from "../../ui/lists/ListItem";

export default function AccountNav() {

    const [active, setActive] = useState("Account");

    const handleClick = (e) => {
        setActive(e.target.id);
        console.log(e.target.id);
    };

    return (
        <List className="sm:flex w-full sm:w-80 sm:flex-col space-y-5 bg-white rounded-md shadow-md p-5 ">
            <ListItem
                id={"Account"}
                name={"Account"}
                link="/account"
                onClick={(e) => handleClick(e)}
                button={true}
                className={`${
                    active === "Account" &&
                    "bg-groovy-red border-groovy-red border-l-4 shadow-md bg-opacity-20"
                }  hover:bg-opacity-20  hover:border-groovy-red border-opacity-100 hover:bg-groovy-red hover:border-l-4 hover:shadow-md  rounded-r-lg w-full py-1 transition-all text-2xl flex items-center px-5`}>
                <Icon icon="user" size="2x" color="black" className="mr-3" />
            </ListItem>
            <ListItem
                id={"Orders"}
                name={"Orders"}
                link="/account/orders"
                onClick={(e) => handleClick(e)}
                button={true}
                className={`${
                    active === "Orders" &&
                    "bg-groovy-red border-groovy-red border-l-4 shadow-md bg-opacity-20"
                }  hover:bg-opacity-20  hover:border-groovy-red border-opacity-100 hover:bg-groovy-red hover:border-l-4 hover:shadow-md  rounded-r-lg w-full py-1 transition-all text-2xl flex items-center px-5`}>
                <Icon
                    icon="bookmark"
                    size="2x"
                    color="black"
                    className="mr-3"
                />
            </ListItem>
            <ListItem
                id={"Password"}
                link="/account/password"
                name={"Password"}
                button={true}
                onClick={(e) => handleClick(e)}
                className={`${
                    active === "Password" &&
                    "bg-groovy-red border-groovy-red border-l-4 shadow-md bg-opacity-20"
                }  hover:bg-opacity-20  hover:border-groovy-red border-opacity-100 hover:bg-groovy-red hover:border-l-4 hover:shadow-md  rounded-r-lg w-full py-1 transition-all text-2xl flex items-center px-5`}>
                <Icon icon="lock" size="2x" color="black" className="mr-3" />
            </ListItem>
        </List>
    );
}
