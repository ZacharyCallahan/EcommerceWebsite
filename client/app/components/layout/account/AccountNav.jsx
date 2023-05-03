import Icon from "../../ui/Icon";
import List from "../../ui/lists/List";
import ListItem from "../../ui/lists/ListItem";

export default function AccountNav() {
    return (
        <List className="sm:flex w-full sm:w-80 sm:flex-col space-y-5 bg-white rounded-md shadow-md p-5 ">
            <ListItem
                name={"Account"}
                link="/account"
                button={true}
                className="bg-groovy-red bg-opacity-20 border-l-4 border-groovy-red border-opacity-100 shadow-md rounded-r-lg w-full py-1 transition-all text-2xl flex items-center px-5">
                <Icon icon="user" size="2x" color="black" className="mr-3" />
            </ListItem>
            <ListItem
                name={"Orders"}
                link="/account/orders"
                button={true}
                className="bg-groovy-red bg-opacity-20 border-l-4 border-groovy-red border-opacity-100 shadow-md rounded-r-lg  w-full py-1 transition-all text-2xl flex items-center px-5">
                <Icon
                    icon="bookmark"
                    size="2x"
                    color="black"
                    className="mr-3"
                />
            </ListItem>
            <ListItem
                link="/account/password"
                name={"Password"}
                button={true}
                className="bg-groovy-red bg-opacity-20 border-l-4 border-groovy-red border-opacity-100  shadow-md rounded-r-md w-full py-1 transition-all text-2xl flex items-center px-5">
                <Icon icon="lock" size="2x" color="black" className="mr-3" />
            </ListItem>
        </List>
    );
}
