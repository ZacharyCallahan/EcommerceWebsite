import Link from "next/link";

export default function Button({ children, link, className, onClick }) {
    const btnClassName = `text-lg ${className}`;
    return link ? (
        <Link href={link} className={btnClassName}>
            {children}
        </Link>
    ) : (
        <button className={btnClassName} onClick={onClick}>
            {children}
        </button>
    );
}
