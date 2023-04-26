import Header from "../Header";
import SectionHeader from "./SectionHeader";

export default function Section({ children, name }) {
    return (
        <div className="w-5/6 m-auto">
            <SectionHeader name={name} />
            <div className="grid grid-cols-fluid gap-5 mb-5">{children}</div>
        </div>
    );
}
