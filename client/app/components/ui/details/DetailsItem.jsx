
export default function DetailsItem({ children, className }) {
    return (
        <>
            {className ? (
                <div className={className}>{children}</div>
            ) : (
                <div className={`text-center space-y-3`}>{children}</div>
            )}
        </>
    );
}
