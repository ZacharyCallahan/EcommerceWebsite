import { Rubik } from "next/font/google";
import NavBar from "./components/layout/NavBar";
import "./globals.css";
import Footer from "./components/layout/Footer";

const rubik = Rubik({ subsets: ["cyrillic"] });

export const metadata = {
    title: "Groovy Gear",
    description: "Groovy Gear",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
            <body className={`${rubik.className}`}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
