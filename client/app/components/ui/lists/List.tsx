import { Children } from "react";
import ListItem from "./ListItem";

interface ListProps {
    children?: React.ReactNode;
    className?: string;
}

export default function List({ children, className }: ListProps) {
    const childArray = Children.toArray(children);

    return (
        <>
            <ul className={`${className}`}>
                {childArray.map((child: any, index: number) => {
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
