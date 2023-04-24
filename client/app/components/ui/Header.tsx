interface ListHeaderProps {
    children?: React.ReactNode;
    className?: string;
    headerClass?: string;
    name?: string;
}

export default function Header({ children, className, name, headerClass }: ListHeaderProps) {
    return (
        <>

                <div className={`${className}`}>
                    <h2 className={`font-bold ${headerClass}`}>{name}</h2>
                    {children}
                </div>
        </>
    );
}