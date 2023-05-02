import "../globals.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["cyrillic"] });

const layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Groovy Gear</title>
            </head>
            <body
                className={`${rubik.className} bg-image`}>
                {children}
            </body>
        </html>
    );
};

export default layout;

