"use client";

import React, { useEffect } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { useMediaQuery } from "@mui/material";
import List from "../ui/lists/List";
import ListItem from "../ui/lists/ListItem";
import Hamburger from "../ui/hamburger/Hamburger";
import LoginLogout from "../ui/LoginLogout";
import ShoppingCart from "../ui/ShoppingCart";
import Icon from "../ui/Icon";

const NavBar = () => {
    const isMediumScreen = useMediaQuery("(min-width: 768px)");

    const [hamOpen, setHamOpen] = React.useState(false);
    const [contactOpen, setContactOpen] = React.useState(false);

    useEffect(() => {
        if (contactOpen)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "unset";
    }, [contactOpen]);

    return (
        <nav className="bg-gray-100 rounded-bl-xl rounded-br-xl shadow-md">
            {/* What displays when the contact form is open */}
            {
                
                contactOpen && (
                    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center backdrop-blur-md backdrop-brightness-50">
                        <div className="absolute bg-white w-full max-w-md rounded-lg p-6">
                            //contact form content here
                            <Button
                                className="absolute top-2 right-2 text-gray-500"
                                onClick={() => setContactOpen(false)}>
                                <Icon icon="times" size="" />
                            </Button>
                        </div>
                    </div>
                )
            }
            <div className="m-auto w-5/6">
                {/* // Responsive navbar removes HOME and CONTACT buttons from the top */}
                {isMediumScreen ? (
                    <div className=" flex items-center justify-between border-b-2 border-opacity-20 py-4">
                        <Button onClick={() => setContactOpen(!contactOpen)}>
                            CONTACT
                        </Button>
                        <Logo />
                        <Button link="/">HOME</Button>
                    </div>
                ) : (
                    <Logo
                        className="border-b-2 border-opacity-20 py-4"
                        headerClass="w-fit"
                    />
                )}
                {/* // Responsive shows the hamburger menu on small screens */}
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

                {/* // What displays when the hamburger menu is open */}
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
                            <ListItem
                                name="CONTACT"
                                button={true}
                                onClick={() => setContactOpen(!contactOpen)}/>
                                
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
