import React from "react";
import Button from "../ui/Button";
import LoginLogout from "../ui/LoginLogout";
import Logo from "../ui/Logo";
import ShoppingCart from "../ui/ShoppingCart";
import ListItem from "../ui/lists/ListItem";
import List from "../ui/lists/List";
import { ListIcon } from "../ui/lists/ListIcon";

const NavBar = () => {
    return (
        <nav className="bg-gray-100 rounded-bl-xl rounded-br-xl shadow-md">
            <div className="container m-auto">
                <div className=" flex items-center justify-between border-b-2 border-opacity-20 py-4">
                    <Button>CONTACT</Button>
                    <Logo />
                    <Button link="/">HOME</Button>
                </div>
                <div className="py-4 flex justify-between items-center">
                    <List className="flex gap-6">
                        <ListItem link="/category/womens" name="WOMENS" />
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
                        <ListIcon link="/account" icon="user" size="2x" color="black" />
                        <ListItem>
                            <ShoppingCart />
                        </ListItem>
                    </List>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
