import { Children } from "react";
import DetailsItem from "./DetailsItem";


export default function Details( { children }) {

    const childArray = Children.toArray(children);

    return (
        <>

            {childArray.map((child, index) => {
                if (child.type === DetailsItem) {
                    return <DetailsItem key={index} {...child.props} />;
                }
            })}

        </>
    );
}