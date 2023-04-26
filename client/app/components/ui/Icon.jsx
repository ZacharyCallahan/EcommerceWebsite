import Button from "./Button";


export default function Icon({ icon, link, size, color, className }) {
    return (
        <Button link={link}>
            <i className={`fa fa-${icon} fa-${size}  text-${color} ${className}`} />
        </Button>
    );
}