import Header from "../Header"
import SectionHeader from "./SectionHeader";

interface SectionProps {
    children?: React.ReactNode;
    name: string;
}

export default function Section( { children, name }: SectionProps) {
    

    return (
        <div className="container m-auto">
            <SectionHeader name={name} />
            <div className="grid grid-cols-fluid gap-5 ">
                {children}
            </div>
        </div>
    );
}