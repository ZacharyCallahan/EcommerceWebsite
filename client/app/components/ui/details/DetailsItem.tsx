interface DetailsItemProps {
    children?: React.ReactNode;
    className?: string;
}

export default function DetailsItem({ children, className }: DetailsItemProps) {
    return (
        <>
            {className ? (
                <div className={className}>{children}</div>
            ) : (
                <div className={`text-center w-1/3 space-y-3`}>{children}</div>
            )}
        </>
    );
}
