interface MainSectionProps {
    children?: React.ReactNode;
}
export default function MainSection({ children }: MainSectionProps) {
    return <div className="bg-gray-100 space-y-14 py-5">{children}</div>;
}
