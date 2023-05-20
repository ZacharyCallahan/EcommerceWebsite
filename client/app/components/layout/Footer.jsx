import Link from "next/link";
import Header from "../ui/Header";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import List from "../ui/lists/List";
import ListItem from "../ui/lists/ListItem";


export default function Footer() {

    return (
        <footer className="bg-gray-100 rounded-tl-xl rounded-tr-xl shadow-md">
            <div className="w-5/6 m-auto">
                <div className="border-b-2 border-opacity-20 py-5 space-y-5 am:space-y-0 sm:flex sm:justify-between sm:items-center">
                    <Logo headerClass="text-xl " imageClass="w-8" />
                    <List className="flex flex-row gap-3 justify-center">
                        <Header>Follow us:</Header>
                        <Icon icon="facebook" color="groovy-red" />
                        <Icon icon="twitter" color="groovy-red" />
                        <Icon icon="instagram" color="groovy-red" />
                        <Icon icon="pinterest" color="groovy-red" />
                    </List>
                </div>
                <div className="text-center mt-5 space-y-5 sm:grid sm:space-y-0 sm:grid-cols-3">
                    <List>
                        <Header className="font-bold text-lg">
                            Information
                        </Header>
                        <ListItem
                            link="/checkout"
                            name="Checkout"
                            className="font-normal"
                        />
                        <ListItem link="/register" name="Register" />
                    </List>

                    <List>
                        <Header className="font-bold text-lg">
                            Categories
                        </Header>
                        <ListItem link="/category/women" name="Women" />
                        <ListItem link="/category/mens" name="Mens" />
                        <ListItem link="/category/kids" name="Kids" />
                        <ListItem
                            link="/category/accessories"
                            name="Accessories"
                        />
                    </List>

                    <List>
                        <Header className="font-bold text-lg">
                            My Account
                        </Header>
                        <ListItem link="/account/orders" name="My Orders" />
                        <ListItem link="/account" name="Account Details" />
                        <ListItem link="/logout" name="Logout" />
                    </List>
                </div>
            </div>
            <div className="text-center py-5">
                <p>
                    Want to see the source code?{" "}
                    <span className="hover:text-groovy-red-dark text-groovy-red text-lg">
                        <Link
                            href={
                                "https://github.com/ZacharyCallahan/EcommerceWebsite"
                            }
                            onClick={openInNewTab}
                        >
                            Click me
                        </Link>
                    </span>
                    !
                </p>
                <p className=" opacity-50 text-sm">
                    Made by Zachary Callahan. Copyright © 2023
                </p>
            </div>
        </footer>
    );
}
