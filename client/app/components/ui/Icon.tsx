import Button from "./Button";

interface IconProps {
    icon?: string;
    link?: string;
    size?: string;
    color?: string;
    className?: string;

}

export default function Icon({ icon, link, size, color, className }: IconProps) {
    return (
        <Button link={link}>
            <i className={`fa fa-${icon} fa-${size}  text-${color} ${className}`} />
        </Button>
    );
}