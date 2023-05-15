import "../globals.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["cyrillic"] });

const layout = ({ children }) => {
    return (

            <div
                className={`${rubik.className} bg-image`}>
                {children}
            </div>
    );
};

export default layout;

