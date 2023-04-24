import Button from "../Button";

interface ListItemProps {
    name?: string;
    link?: string;
    children?: React.ReactNode;
    className?: string;
    button?: boolean;
    onClick?: () => void;
}

export default function ListItem({
    name,
    link,
    children,
    className,
    button,
    onClick,
}: ListItemProps) {

    if (button) {
        return (
            <li className={`mb-1`}>
                <Button link={link} className={className} onClick={onClick}>
                    {children}
                    {name}
                </Button>
            </li>
        );
    }
    if (children) {
        return (
            <li className={`mb-1 ${className}`}>
                {children}
                {name}
            </li>
        );
    }  
    else {
        return (
            <li className="mb-1">
                <Button link={link}>
                    {name}
                </Button>
            </li>
        );
    }
}
