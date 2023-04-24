import Icon from "../Icon";
import List from "../lists/List";
import ListItem from "../lists/ListItem";

export default function AccountNav() {
    return (
        <List className="flex w-80 flex-col gap-5 bg-white rounded-md shadow-md pt-5 h-96 ">
            <ListItem
                name={"Account"}
                link="/account"
                button={true}
                className="bg-groovy-red bg-opacity-25 border-l-4 border-groovy-red border-opacity-100 rounded-md w-full py-1 transition-all text-2xl flex items-center">
                <Icon
                    icon="user"
                    size="2x"
                    color="black"
                    className="fa fa-lock text-2xl ml-5 mr-3"
                />
            </ListItem>
            <ListItem
                name={"Orders"}
                link="/account/orders"
                button={true}
                className="bg-groovy-red bg-opacity-25 border-l-4 border-groovy-red border-opacity-100 rounded-md w-full py-1 transition-all text-2xl flex items-center">
                <Icon
                    icon="bookmark"
                    size="2x"
                    color="black"
                    className="fa fa-lock text-2xl ml-5 mr-3"
                />
            </ListItem>
            <ListItem
                link="/account/password"
                name={"Password"}
                button={true}
                className="bg-groovy-red bg-opacity-25 border-l-4 border-groovy-red border-opacity-100 rounded-md w-full py-1 transition-all text-2xl flex items-center">
                <Icon
                    icon="lock"
                    size="2x"
                    color="black"
                    className="fa fa-lock text-2xl ml-5 mr-3"
                />
            </ListItem>
        </List>
    );
}
