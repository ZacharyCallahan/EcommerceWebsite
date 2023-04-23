import Icon from "../Icon";

interface ListIconProps {
    icon: string;
    link?: string;
    className?: string;
    size?: string;
    color?: string;
}

export function ListIcon({link, icon, size, color }: ListIconProps) {
    return (
        <li>
            <Icon link={link} icon={icon} size={size} color={color} />
        </li>
    );
}
