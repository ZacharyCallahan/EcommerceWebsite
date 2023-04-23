import Button from "../Button";

interface ListItemProps {
    name?: string;
    link?: string;
    children?: React.ReactNode;
}

export default function ListItem({ name, link, children }: ListItemProps) {
    if (children) {
        return (
            <li className="mb-1">
                {children}
            </li>
        );
    } else {
        return (
            <li className="mb-1">
                <Button link={link}>{name}</Button>
            </li>
        );
    }
}
