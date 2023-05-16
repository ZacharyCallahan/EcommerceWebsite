import Button from "../Button";

export default function ListItem({
    name,
    link,
    children,
    className,
    button,
    onClick,
    id
} ) {

    if (button) {
        return (
            <li className={`mb-1`} >
                <Button link={link} className={className} onClick={onClick} id={id}>
                    {children}
                    {name}
                </Button>
            </li>
        );
    }
    if (children) {
        return (
            <li className={`mb-1 ${className}`} id={id}>
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
