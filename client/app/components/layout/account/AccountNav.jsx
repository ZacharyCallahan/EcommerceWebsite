"use client";
import { useEffect, useState } from "react";
import Icon from "../../ui/Icon";
import List from "../../ui/lists/List";
import ListItem from "../../ui/lists/ListItem";
import { usePathname, useSearchParams } from "next/navigation";

export default function AccountNav() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [url, setUrl] = useState(pathname + searchParams.toString());

    useEffect(() => {
        const url = pathname + searchParams.toString();
        setUrl(url);
    }, [pathname, searchParams]);


    return (
        <List className="sm:flex w-full sm:w-80 sm:flex-col space-y-5 bg-white rounded-md shadow-md p-5 ">
            <ListItem
                id={"Account"}
                name={"Account"}
                link="/account"
                button={true}
                className={`${
                    url === "/account" &&
                    "bg-groovy-red border-groovy-red border-l-4 shadow-md bg-opacity-20"
                }  hover:bg-opacity-20  hover:border-groovy-red border-opacity-100 hover:bg-groovy-red hover:border-l-4 hover:shadow-md  rounded-r-lg w-full py-1 transition-all text-2xl flex items-center px-5`}>
                <Icon icon="user" size="2x" color="black" className="mr-3" />
            </ListItem>
            <ListItem
                id={"Orders"}
                name={"Orders"}
                link="/account/orders"
                button={true}
                className={`${
                    url === "/account/orders" &&
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
                className={`${
                    url === "/account/password" &&
                    "bg-groovy-red border-groovy-red border-l-4 shadow-md bg-opacity-20"
                }  hover:bg-opacity-20 hover:border-groovy-red border-opacity-100 hover:bg-groovy-red hover:border-l-4 hover:shadow-md rounded-r-lg w-full py-1 transition-all text-2xl flex items-center px-5`}>
                <Icon icon="lock" size="2x" color="black" className="mr-3" />
            </ListItem>
        </List>
    );
}
