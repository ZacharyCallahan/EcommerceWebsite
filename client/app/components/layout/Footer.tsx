import Button from "../ui/Button";
import Copyright from "../ui/Copyright";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import List from "../ui/lists/List";
import ListHeader from "../ui/lists/ListHeader";
import { ListIcon } from "../ui/lists/ListIcon";
import ListItem from "../ui/lists/ListItem";

export default function Footer() {
    return (
        <footer className="bg-gray-100 rounded-tl-xl rounded-tr-xl shadow-md">
            <div className="container m-auto">
                <div className="flex items-center justify-between  border-b-2 border-opacity-20">
                    <List className="flex flex-row gap-3 py-7">
                        <ListHeader>Follow us:</ListHeader>
                        <ListIcon icon="facebook" />
                        <ListIcon icon="twitter" />
                        <ListIcon icon="instagram" />
                        <ListIcon icon="pinterest" />
                    </List>
                    <Logo headerClass="text-xl" imageClass="w-8" />
                </div>
                <div className="flex justify-between mt-7">
                    <List>
                        <ListHeader>Information</ListHeader>
                        <ListItem link="/checkout" name="Checkout" />
                        <ListItem link="/register" name="Register" />
                    </List>

                    <List>
                        <ListHeader>Categories</ListHeader>
                        <ListItem link="/category/women" name="Women" />
                        <ListItem link="/category/mens" name="Mens" />
                        <ListItem link="/category/kids" name="Kids" />
                        <ListItem
                            link="/category/accessories"
                            name="Accessories"
                        />
                    </List>

                    <List>
                        <ListHeader>My Account</ListHeader>
                        <ListItem link="/account/orders" name="My Orders" />
                        <ListItem link="/account" name="Account Details" />
                        <ListItem link="/logout" name="Logout" />
                    </List>
                </div>
            </div>
            <Copyright />
        </footer>
    );
}
