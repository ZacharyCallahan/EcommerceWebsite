"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { useMediaQuery } from "@mui/material";
import List from "../ui/lists/List";
import ListItem from "../ui/lists/ListItem";
import Hamburger from "../ui/hamburger/Hamburger";
import LoginLogout from "../ui/LoginLogout";
import ShoppingCart from "../ui/ShoppingCart";
import Icon from "../ui/Icon";
import Contact from "./contact/Contact";
import { CSSTransition } from "react-transition-group";

const NavBar = () => {
    const isMediumScreen = useMediaQuery("(min-width: 768px)");

    const [hamOpen, setHamOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const hamRef = useRef(null);

    const handleClickOutside = (e) => {
        if (!hamRef.current.contains(e.target) && hamRef.current) {
            setHamOpen(false);
        }
    };

    const handleHamClick = () => {
        setHamOpen(!hamOpen);
    };

    useEffect(() => {
        if (!isMediumScreen) {

            document.addEventListener("click", handleClickOutside);
            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        }
    }, [isMediumScreen]);

    useEffect(() => {
        if (contactOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [contactOpen]);

    return (
        <nav
            className="bg-gray-100 rounded-bl-xl rounded-br-xl shadow-md"
            ref={hamRef}>
            {/* What displays when the contact form is open */}
            {contactOpen && (
                <Contact onClick={() => setContactOpen(!contactOpen)} />
            )}
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
                <div className="py-4 flex justify-between items-center  ">
                    {isMediumScreen ? (
                        <>
                            {hamOpen && setHamOpen(false)}
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
                            <Hamburger
                                onClick={handleHamClick}
                                hamRef={hamRef}
                            />
                            <List className="flex items-center gap-6 ">
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
                <CSSTransition
                    in={hamOpen === true}
                    timeout={500}
                    classNames="height"
                    unmountOnExit>
                    <div
                        className={`${
                            hamOpen && "h-fit border-t-2 border-opacity-2 py-5"
                        }  flex justify-between `}>
                        <List className="flex flex-col gap-5 border-opacity-20">
                            <ListItem
                                link="/category/womens"
                                name="WOMENS"
                                onClick={() => {
                                    setHamOpen(false);
                                }}
                            />
                            <ListItem link="/category/mens" name="MENS" />
                            <ListItem link="/category/kids" name="KIDS" />
                            <ListItem
                                link="/category/accessories"
                                name="ACCESSORIES"
                            />
                        </List>
                        <List className="flex flex-col items-end">
                            <ListItem link="/" name="HOME" />
                            <ListItem
                                name="CONTACT"
                                button={true}
                                onClick={() => setContactOpen(!contactOpen)}
                            />

                            <ListItem>
                                <LoginLogout />
                            </ListItem>
                        </List>
                    </div>
                </CSSTransition>
            </div>
        </nav>
    );
};

export default NavBar;
