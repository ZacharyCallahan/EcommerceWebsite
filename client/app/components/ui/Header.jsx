
export default function Header({ children, className, name, headerClass }) {
    return (
        <>

                <div className={`${className}`}>
                    <h2 className={`font-bold ${headerClass}`}>{name}</h2>
                    {children}
                </div>
        </>
    );
}