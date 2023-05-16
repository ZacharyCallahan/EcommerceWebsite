import Link from "next/link";

export default function Button({ children, link, className, onClick, id }) {
    const btnClassName = `text-lg ${className}`;
    return link ? (
        <Link href={link} className={btnClassName} onClick={onClick} id={id}>
            {children}
        </Link>
    ) : (
        <button className={btnClassName} onClick={onClick} id={id}>
            {children}
        </button>
    );
}
