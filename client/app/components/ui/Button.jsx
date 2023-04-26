import Link from "next/link";

export default function Button({ children, link, className, onClick }) {
    //className is used to add additional classes to the button if needed
    if (link) {
        return (
            <Link href={link} className={`text-lg ${className}`}>
                {children}
            </Link>
        );
    } else {
        return <button onClick={onClick} className={`text-lg font-medium ${className}`}>{children}</button>;
    }
}
