interface ListSectionHeaderProps {
    name: string;
}

export default function SectionHeader({name }: ListSectionHeaderProps) {
    return (
        <h2 className={`text-4xl font-bold mb-14 text-center`}>{name}</h2>
    );
}
