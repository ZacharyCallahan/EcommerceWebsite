"use client";

import React from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { useMediaQuery } from "@material-ui/core";
import List from "../ui/lists/List";
import ListItem from "../ui/lists/ListItem";
import Hamburger from "../ui/hamburger/Hamburger";
import LoginLogout from "../ui/LoginLogout";
import ShoppingCart from "../ui/ShoppingCart";
import Icon from "../ui/Icon";

const NavBar = () => {
    const isMediumScreen = useMediaQuery("(min-width: 768px)");

    const [hamOpen, setHamOpen] = React.useState(false);

    console.log(hamOpen);

    return (
        <nav className="bg-gray-100 rounded-bl-xl rounded-br-xl shadow-md">
            <div className="m-auto w-5/6">
                {isMediumScreen ? (
                    <div className=" flex items-center justify-between border-b-2 border-opacity-20 py-4">
                        <Button>CONTACT</Button>
                        <Logo />
                        <Button link="/">HOME</Button>
                    </div>
                ) : (
                    <Logo
                        className="border-b-2 border-opacity-20 py-4"
                        headerClass="w-fit"
                    />
                )}
                <div className="py-4 flex justify-between items-center border-b-2 border-opacity-20 ">
                    {isMediumScreen ? (
                        <>
                            <List className="flex gap-6 ">
                                <ListItem
                                    link="/category/womens"
                                    name="WOMENS"
                                />
                                <ListItem link="/category/mens" name="MENS" />
                                <ListItem link="/category/kids" name="KIDS" />
                                <ListItem
                                    link="/category/accessories"
                                    name="ACCESSORIES"
                                />
                            </List>
                            <List className="flex items-center gap-6">
                                <ListItem>
                                    <LoginLogout />
                                </ListItem>
                                <Icon
                                    link="/account"
                                    icon="user"
                                    size="2x"
                                    color="black"
                                />

                                <ListItem>
                                    <ShoppingCart />
                                </ListItem>
                            </List>
                        </>
                    ) : (
                        <>
                            <Hamburger onClick={() => setHamOpen(!hamOpen)} />
                            <List className="flex items-center gap-6">
                                <ListItem>
                                    <Icon
                                        link="/account"
                                        icon="user"
                                        size="2x"
                                        color="black"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ShoppingCart />
                                </ListItem>
                            </List>
                        </>
                    )}
                </div>
                {hamOpen && (
                    <div
                        className={`flex justify-between border-b-2 transition-all duration-500 transform mt-4`}>
                        <List className="flex flex-col gap-6 w-fit">
                            <ListItem link="/category/womens" name="WOMENS" />
                            <ListItem link="/category/mens" name="MENS" />
                            <ListItem link="/category/kids" name="KIDS" />
                            <ListItem
                                link="/category/accessories"
                                name="ACCESSORIES"
                            />
                        </List>
                        <List className="flex flex-col items-end w-fit">
                            <ListItem link="/" name="HOME" />
                            <ListItem link="/contact" name="CONTACT" />
                            <ListItem>
                                <LoginLogout />
                            </ListItem>
                        </List>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
