interface ListHeaderProps {
    children?: React.ReactNode;
}

export default function ListHeader( { children }: ListHeaderProps) {
    return <h2 className="mb-3 text-xl">{children}</h2>;
}