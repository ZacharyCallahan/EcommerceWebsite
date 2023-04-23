import { Children } from "react";
import DetailsItem from "./DetailsItem";

interface DetailsProps {
    children?: React.ReactNode;
}

export default function Details( { children }: DetailsProps) {

    const childArray = Children.toArray(children);

    return (
        <>

            {childArray.map((child: any) => {
                if (child.type === DetailsItem) {
                    return <DetailsItem key={child.props.headerContent} {...child.props} />;
                }
            })}

        </>
    );
}