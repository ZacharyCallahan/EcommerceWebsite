interface ListHeaderProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Header({ children, className }: ListHeaderProps) {
    return (
        <>
            {
                className ? (
                    <h2 className={`font-bold ${className}`}>{children}</h2>
                ) : (
                    <h2 className={`mb-3 text-xl`}>{children}</h2>
                )
            }
        
        </>
    );
}