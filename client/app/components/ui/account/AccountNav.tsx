import { useMediaQuery } from "@material-ui/core";
import Icon from "../Icon";
import List from "../lists/List";
import ListItem from "../lists/ListItem";

export default function AccountNav() {
    
    return (
        <List className=" sm:flex w-full sm:w-80 sm:flex-col space-y-5 bg-white rounded-md shadow-md p-5 ">
            <ListItem
                name={"Account"}
                link="/account"
                button={true}
                className="bg-groovy-red bg-opacity-25 border-l-4 border-groovy-red border-opacity-100 rounded-md w-full py-1 transition-all text-2xl flex items-center px-5">
                <Icon
                    icon="user"
                    size="2x"
                    color="black"
                    className="mr-3"
                />
            </ListItem>
            <ListItem
                name={"Orders"}
                link="/account/orders"
                button={true}
                className="bg-groovy-red bg-opacity-25 border-l-4 border-groovy-red border-opacity-100 rounded-md w-full py-1 transition-all text-2xl flex items-center px-5">
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
                className="bg-groovy-red bg-opacity-25 border-l-4 border-groovy-red border-opacity-100 rounded-md w-full py-1 transition-all text-2xl flex items-center px-5">
                <Icon
                    icon="lock"
                    size="2x"
                    color="black"
                    className="mr-3"
                />
            </ListItem>
        </List>
    );
}
