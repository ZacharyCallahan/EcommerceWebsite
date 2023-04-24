import Copyright from "../ui/Copyright";
import Header from "../ui/Header";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import List from "../ui/lists/List";
import ListItem from "../ui/lists/ListItem";

export default function Footer() {
    return (
        <footer className="bg-gray-100 rounded-tl-xl rounded-tr-xl shadow-md">
            <div className="w-5/6 m-auto">
                <div className="flex items-center justify-between  border-b-2 border-opacity-20">
                    <List className="flex flex-row gap-3 py-7">
                        <Header>Follow us:</Header>
                        <Icon icon="facebook" color="groovy-red" />
                        <Icon icon="twitter" color="groovy-red" />
                        <Icon icon="instagram" color="groovy-red" />
                        <Icon icon="pinterest" color="groovy-red" />
                    </List>
                    <Logo headerClass="text-xl" imageClass="w-8" />
                </div>
                <div className="flex justify-between mt-7">
                    <List>
                        <Header>Information</Header>
                        <ListItem link="/checkout" name="Checkout" />
                        <ListItem link="/register" name="Register" />
                    </List>

                    <List>
                        <Header>Categories</Header>
                        <ListItem link="/category/women" name="Women" />
                        <ListItem link="/category/mens" name="Mens" />
                        <ListItem link="/category/kids" name="Kids" />
                        <ListItem
                            link="/category/accessories"
                            name="Accessories"
                        />
                    </List>

                    <List>
                        <Header>My Account</Header>
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
