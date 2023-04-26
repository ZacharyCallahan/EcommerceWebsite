import { Children } from "react";
import ListItem from "./ListItem";

export default function List({ children, className }) {
    const childArray = Children.toArray(children);

    return (
        <>
            <ul className={`${className}`}>
                {childArray.map((child, index) => {
                    if (child.type === ListItem) {
                        return <ListItem key={index} {...child.props} />;
                    } else {
                        return <li key={index}>{child}</li>;
                    }
                })}
            </ul>
        </>
    );
}
